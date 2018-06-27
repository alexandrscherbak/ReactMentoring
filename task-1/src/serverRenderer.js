import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import MoviesSearchApp from './components/MoviesSearchApp/MoviesSearchApp.jsx';
import configureStore from './redux/configureStore';

function renderHTML(html, preloadedState) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Movies Search App</title>
				${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
			</head>
			<body style="margin: 0 30px; width: 70%; border: 2px solid black;">
				<div id="root">${html}</div>
				<script>
					window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
				</script>
				<script src="/js/main.js"></script>
			</body>
		</html>
	`;
}

export default function serverRenderer() {
	return (req, res) => {
		const store = configureStore();
		// This context object contains the results of the render
		const context = {};

		const root = (
			<MoviesSearchApp
				context={context}
				location={req.url}
				Router={StaticRouter}
				store={store}
			/>
		);

		store.runSaga().done.then(() => {
			const htmlString = renderToString(root);

			// context.url will contain the URL to redirect to if a <Redirect> was used
			if (context.url) {
				res.writeHead(302, {
					Location: context.url,
				});
				res.end();
				return;
			}

			const preloadedState = store.getState();

			res.send(renderHTML(htmlString, preloadedState));
		});

		// Do first render, starts initial actions.
		renderToString(root);
		// When the first render is finished, send the END action to redux-saga.
		store.close();
	};
}

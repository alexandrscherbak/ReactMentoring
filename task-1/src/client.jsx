import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MoviesSearchApp from './components/MoviesSearchApp/MoviesSearchApp.jsx';
import configureStore from './redux/configureStore';

const store = configureStore(window.PRELOADED_STATE);

const moviesSearchApp = (
	<MoviesSearchApp
		Router={BrowserRouter}
		store={store}
	/>
);

hydrate(moviesSearchApp, document.getElementById('root'));

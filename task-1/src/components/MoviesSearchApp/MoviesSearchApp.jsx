import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import MainPage from '../MainPage/MainPage.jsx';
import FilmInfoPage from '../FilmInfoPage/FilmInfoPage.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import { Route, Switch, Redirect } from "react-router-dom";

const MoviesSearchApp = (
	{Router, location, context, store}
) => (
	<Provider store={store}>
		<Router location={location} context={context}>
			<ErrorBoundary>
				<Switch>
					<Route exact path="/search" component={MainPage} />
					<Redirect exact from="/" to="/search" />
					<Route path="/film/:filmId" component={FilmInfoPage} />
					<Route path="*" component={PageNotFound} />
				</Switch>
			</ErrorBoundary>
		</Router>
	</Provider>
);

export default MoviesSearchApp;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MainPage from './components/MainPage/MainPage.jsx';
import FilmInfoPage from './components/FilmInfoPage/FilmInfoPage.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import MoviesSearchApp from './components/MoviesSearchApp/MoviesSearchApp.jsx';

ReactDOM.render(
	<Router>
		<MoviesSearchApp>
			<Switch>
				<Route exact path="/search" component={MainPage} />
				<Redirect exact from="/" to="/search" />
				<Route path="/film/:filmId" component={FilmInfoPage} />
				<Route path="*" component={PageNotFound} />
			</Switch>
		</MoviesSearchApp>
	</Router>,
	document.getElementById('root'),
);

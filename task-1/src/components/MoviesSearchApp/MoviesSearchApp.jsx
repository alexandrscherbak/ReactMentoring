import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import { withRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import app from '../../redux/reducers/app.reducer.js';
import FilmsInfoActions from '../../redux/actions/films-info.action.js';
import SelectedFilmInfoActions from '../../redux/actions/selected-film-info.action.js';
import { all } from 'redux-saga/effects';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
	yield all([
		FilmsInfoActions.loadFilmsInfoSaga(),
		SelectedFilmInfoActions.loadSelectedFilmInfoSaga(),
	]);
}

const store = createStore(
	app,
	applyMiddleware(
		sagaMiddleware,
		loggerMiddleware
	)
);

sagaMiddleware.run(rootSaga)

export class MoviesSearchApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<ErrorBoundary>
					{this.props.children} 
				</ErrorBoundary>
			</Provider>
		);
	}
}

export default withRouter(MoviesSearchApp);

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import app from './reducers/app.reducer.js';
import FilmsInfoActions from './actions/films-info.action.js';
import SelectedFilmInfoActions from './actions/selected-film-info.action.js';
import { all } from 'redux-saga/effects';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
	yield all([
		FilmsInfoActions.loadFilmsInfoSaga(),
		SelectedFilmInfoActions.loadSelectedFilmInfoSaga(),
	]);
}

export default (initialState) => {
	const store = createStore(
		app,
		initialState,
		applyMiddleware(
			sagaMiddleware,
			loggerMiddleware
		)
	);

	sagaMiddleware.run(rootSaga);
	store.runSaga = () => sagaMiddleware.run(rootSaga);
	store.close = () => store.dispatch(END);

	return store;
};

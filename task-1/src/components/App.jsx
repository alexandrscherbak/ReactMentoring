import React from 'react';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import MoviesSearchApp from './MoviesSearchApp/MoviesSearchApp.jsx'
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import app from '../redux/reducers/app.reducer.js';

const loggerMiddleware = createLogger();

const store = createStore(
	app,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<MoviesSearchApp />
			</Provider>
		);
	}
}

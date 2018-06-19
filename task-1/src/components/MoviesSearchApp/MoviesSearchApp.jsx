import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import { withRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import app from '../../redux/reducers/app.reducer.js';

const loggerMiddleware = createLogger();

const store = createStore(
	app,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

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

import React from 'react';
import Component from './Component.jsx';
import CreateElement from './CreateElement.js';
import Functional from './Functional.jsx';
import PureComponent from './PureComponent.jsx';

export default class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Component text='Component with props'/>
				<CreateElement text='CreateElement with props'/>
				<Functional text='Functional with props'/>
				<PureComponent text='PureComponent with props'/>
			</React.Fragment>
		);
	}
}

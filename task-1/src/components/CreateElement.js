import React from 'react';

export default class CreateElement extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				this.props.text
			)
		);
	}
}

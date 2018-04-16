import React from 'react';

export default class PureComponent extends React.PureComponent {
	render() {
		return (
			<div>
				<h1>{this.props.text}</h1>
			</div>
		);
	}
}

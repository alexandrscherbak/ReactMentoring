import React from 'react';
import Logo from './Logo.jsx';
import renderer from 'react-test-renderer';

describe('Logo', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<Logo/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

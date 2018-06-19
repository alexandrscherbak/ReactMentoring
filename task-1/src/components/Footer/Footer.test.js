import React from 'react';
import Footer from './Footer.jsx';
import renderer from 'react-test-renderer';

describe('Footer', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<Footer/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

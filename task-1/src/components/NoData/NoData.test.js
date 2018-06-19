import React from 'react';
import NoData from './NoData.jsx';
import renderer from 'react-test-renderer';

test('NoData snapshot', () => {
	const component = renderer.create(
		<NoData />,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

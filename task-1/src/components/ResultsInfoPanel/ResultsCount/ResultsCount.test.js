import React from 'react';
import ResultsCount from './ResultsCount.jsx';
import renderer from 'react-test-renderer';

const props = {
	count: 12,
};

describe('ResultsCount', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<ResultsCount {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultsInfoPanel from './ResultsInfoPanel.jsx';
import renderer from 'react-test-renderer';

jest.mock('./ResultsCount/ResultsCount.jsx', () => () => 'ResultsCount');
jest.mock('./ResultsSort/ResultsSort.jsx', () => () => 'ResultsSort');
Enzyme.configure({ adapter: new Adapter() });

function setup() {
	return mount(<ResultsInfoPanel/>);
}

describe('ResultsInfoPanel', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<ResultsInfoPanel/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.length).toBe(1);
	});
});

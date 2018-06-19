import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ResultsSort, mapStateToProps } from './ResultsSort.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	sortBy: 'release_date',
	updateSortBy: jest.fn(),
};

function setup() {
	return mount(<ResultsSort {...props} />);
}

describe('ResultsSort', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<ResultsSort {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('span').text()).toBe('Sort by');
		expect(enzymeWrapper.find('.active-button').text()).toBe('release date');
	});
	it('should call updateSortBy if button clicked', () => {
		const enzymeWrapper = setup();
		const button1 = enzymeWrapper.find('.active-button');
		expect(props.updateSortBy.mock.calls.length).toBe(0);
		button1.props().onClick();
		expect(props.updateSortBy.mock.calls.length).toBe(1);
		enzymeWrapper.setProps({sortBy: 'vote_average'});
		const button2 = enzymeWrapper.find('.active-button');
		button2.props().onClick();
		expect(props.updateSortBy.mock.calls.length).toBe(2);
	});
	it('should change active button if props.sortBy changed', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('.active-button').text()).toBe('release date');
		enzymeWrapper.setProps({sortBy: 'vote_average'});
		expect(enzymeWrapper.find('.active-button').text()).toBe('rating');
	});
	it('mapStateToProps should return props from state', () => {
		const state = {
			sortBy: 'sortBy',
		};
		expect(mapStateToProps(state)).toEqual({
			sortBy: 'sortBy',
		});
	});
});

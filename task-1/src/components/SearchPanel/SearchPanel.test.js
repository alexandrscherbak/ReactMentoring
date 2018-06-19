import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchPanel, mapStateToProps } from './SearchPanel.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	searchValue: '123',
	searchBy: 'title',
	searchClicked: jest.fn(),
	updateSearchValue: jest.fn(),
	updateSearchBy: jest.fn(),
};

function setup() {
	return mount(<SearchPanel {...props} />);
}

describe('SearchPanel', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<SearchPanel {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('input').props().value).toBe(props.searchValue);
		expect(enzymeWrapper.find('.active-button').text()).toBe('Title');
	});
	it('should call searchClicked if button clicked', () => {
		const enzymeWrapper = setup();
		const button = enzymeWrapper.find('.search-button');
		expect(props.searchClicked.mock.calls.length).toBe(0);
		button.props().onClick();
		expect(props.searchClicked.mock.calls.length).toBe(1);
	});
	it('should call updateSearchValue if input changed', () => {
		const enzymeWrapper = setup();
		const input = enzymeWrapper.find('input');
		expect(props.updateSearchValue.mock.calls.length).toBe(0);
		input.props().onChange({target: {value: 123}});
		expect(props.updateSearchValue.mock.calls.length).toBe(1);
	});
	it('should call updateSearchBy if button clicked', () => {
		const enzymeWrapper = setup();
		const button1 = enzymeWrapper.find('.search-by-buttons-container').childAt(1);
		const button2 = enzymeWrapper.find('.search-by-buttons-container').childAt(2);
		expect(props.updateSearchBy.mock.calls.length).toBe(0);
		button1.props().onClick();
		expect(props.updateSearchBy.mock.calls.length).toBe(1);
		button2.props().onClick();
		expect(props.updateSearchBy.mock.calls.length).toBe(2);
	});
	it('should change active button if props.searchBy changed', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('.active-button').text()).toBe('Title');
		enzymeWrapper.setProps({searchBy: 'genres'});
		expect(enzymeWrapper.find('.active-button').text()).toBe('Genre');
	});
	it('mapStateToProps should return props from state', () => {
		const state = {
			searchValue: 'searchValue',
			searchBy: 'searchBy',
		};
		expect(mapStateToProps(state)).toEqual({
			searchValue: 'searchValue',
			searchBy: 'searchBy',
		});
	});
});

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MainPage, mapStateToProps } from './MainPage.jsx';
import renderer from 'react-test-renderer';

jest.mock('../SearchPanel/SearchPanel.jsx', () => 'mock-search-panel');
jest.mock('../ResultsInfoPanel/ResultsSort/ResultsSort.jsx', () => () => 'ResultsSort');
Enzyme.configure({ adapter: new Adapter() });

const props = {
	filmsInfo: [
		{
			id: 2,
			poster_path: 'poster_path1',
			title: 'film1',
			release_date: '2018-04-01',
			genres: ['action', 'drama'],
		},
		{
			id: 3,
			poster_path: 'poster_path2',
			title: 'film2',
			release_date: '2018-04-01',
			genres: ['action', 'drama'],
		},
	],
	searchValue: 'searchValue',
	searchBy: 'searchBy',
	sortBy: 'sortBy',
	updateFilmsInfo: jest.fn(),
	updateSearchValue: jest.fn(),
	updateSearchBy: jest.fn(),
	updateSortBy: jest.fn(),
	match: {
		params: {
			filmId: 1,
		},
	},
	history: {
		push: jest.fn(),
	},
	location: {
		search: '?search=a%20b&searchBy=title&sortBy=vote_average',
	}
};

function setup() {
	return mount(<MainPage {...props}/>);
}

describe('MainPage', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<MainPage {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should call updateSearchValue in componentDidMount', () => {
		expect(props.updateSearchValue.mock.calls.length).toBe(1);
	});
	it('should call updateSearchBy in componentDidMount', () => {
		expect(props.updateSearchBy.mock.calls.length).toBe(1);
	});
	it('should call updateSortBy in componentDidMount', () => {
		expect(props.updateSortBy.mock.calls.length).toBe(1);
	});
	it('should call updateFilmsInfo in componentDidMount', () => {
		expect(props.updateFilmsInfo.mock.calls.length).toBe(1);
	});
	it('should call history.push if film clicked', () => {
		const enzymeWrapper = setup();
		const filmsTable = enzymeWrapper.find('FilmsTable');
		expect(props.history.push.mock.calls.length).toBe(0);
		filmsTable.props().selectMovie(props.filmsInfo[0]);
		expect(props.history.push.mock.calls.length).toBe(1);
	});
	it('should call updateFilmsInfo if search clicked', () => {
		const enzymeWrapper = setup();
		const searchPanel = enzymeWrapper.find('mock-search-panel');
		expect(props.updateFilmsInfo.mock.calls.length).toBe(3);
		searchPanel.props().searchClicked();
		expect(props.updateFilmsInfo.mock.calls.length).toBe(4);
	});
	it('should render FilmsTable if there are films', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('FilmsTable').length).toBe(1);
	});
	it('should render NoData if no films', () => {
		const enzymeWrapper = setup();
		enzymeWrapper.setProps({filmsInfo: []});
		expect(enzymeWrapper.find('NoData').length).toBe(1);
	});
	it('mapStateToProps should return props from state', () => {
		const state = {
			searchValue: 'searchValue',
			searchBy: 'searchBy',
			sortBy: 'sortBy',
			filmsInfo: 'filmsInfo',
		};
		expect(mapStateToProps(state)).toEqual({
			searchValue: 'searchValue',
			searchBy: 'searchBy',
			sortBy: 'sortBy',
			filmsInfo: 'filmsInfo',
		});
	});
});

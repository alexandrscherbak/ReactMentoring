import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FilmInfoPage } from './FilmInfoPage.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	selectedFilmInfo: {
		id: 1,
		poster_path: 'poster_path',
		title: 'film',
		release_date: '2018-04-01',
		genres: ['action', 'drama'],
	},
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
	match: {
		params: {
			filmId: 1,
		},
	},
	selectMovie: jest.fn(),
	history: {
		push: jest.fn(),
	}
};

function setup() {
	return mount(<FilmInfoPage {...props}/>);
}

describe('FilmInfoPage', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<FilmInfoPage {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should call selectMovie in componentDidMount', () => {
		expect(props.selectMovie.mock.calls.length).toBe(1);
	});
	it('should call history.push if FilmFullInfoContainer search clicked', () => {
		const enzymeWrapper = setup();
		const filmFullInfoContainer = enzymeWrapper.find('FilmFullInfoContainer');
		expect(props.history.push.mock.calls.length).toBe(0);
		filmFullInfoContainer.props().searchClicked();
		expect(props.history.push.mock.calls.length).toBe(1);
	});
	it('should call history.push and selectMovie if FilmsTable selectMovie clicked', () => {
		const enzymeWrapper = setup();
		const filmsTable = enzymeWrapper.find('FilmsTable');
		expect(props.history.push.mock.calls.length).toBe(1);
		expect(props.selectMovie.mock.calls.length).toBe(3);
		filmsTable.props().selectMovie({id: 1});
		expect(props.history.push.mock.calls.length).toBe(2);
		expect(props.selectMovie.mock.calls.length).toBe(4);
	});
	it('should not render if no selectedFilmInfo', () => {
		const enzymeWrapper = setup();
		enzymeWrapper.setProps({selectedFilmInfo: null});
		expect(enzymeWrapper.children().length).toBe(0);
	});
});

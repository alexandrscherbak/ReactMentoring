import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmFullInfoContainer from './FilmFullInfoContainer.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	filmInfo: {
		poster_path: 'poster_path',
		title: 'film',
		release_date: '2018-04-01',
		vote_average: '7',
		overview: 'overview',
	},
	searchClicked: jest.fn(),
};

function setup() {
	return mount(<FilmFullInfoContainer {...props} />);
}

describe('FilmFullInfoContainer', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<FilmFullInfoContainer {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('img').html()).toContain(props.filmInfo.title);
		expect(enzymeWrapper.find('.film-info').childAt(0).text()).toBe(props.filmInfo.title);
		expect(enzymeWrapper.find('.film-info').childAt(1).childAt(0).text()).toBe(props.filmInfo.release_date.slice(0, 4));
		expect(enzymeWrapper.find('.film-info').childAt(1).childAt(1).text()).toBe(props.filmInfo.vote_average);
		expect(enzymeWrapper.find('.film-info').childAt(2).text()).toBe(props.filmInfo.overview);
	});
	it('should call searchClicked if button clicked', () => {
		const enzymeWrapper = setup();
		const button = enzymeWrapper.find('button');
		expect(props.searchClicked.mock.calls.length).toBe(0);
		button.props().onClick();
		expect(props.searchClicked.mock.calls.length).toBe(1);
	});
});

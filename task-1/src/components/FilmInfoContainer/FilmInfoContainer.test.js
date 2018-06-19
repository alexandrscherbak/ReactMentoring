import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmInfoContainer from './FilmInfoContainer.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	filmInfo: {
		poster_path: 'poster_path',
		title: 'film',
		release_date: '2018-04-01',
		genres: ['action', 'drama'],
	},
	selectMovie: jest.fn(),
};

function setup() {
	return mount(<FilmInfoContainer {...props}/>);
}

describe('FilmInfoContainer', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<FilmInfoContainer {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should call selectMovie if button clicked', () => {
		const enzymeWrapper = setup();
		const filmInfoContainer = enzymeWrapper.find('.film-info-container');
		expect(props.selectMovie.mock.calls.length).toBe(0);
		filmInfoContainer.props().onClick();
		expect(props.selectMovie.mock.calls.length).toBe(1);
	});
});

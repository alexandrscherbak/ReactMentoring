import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmsByGenrePanel from './FilmsByGenrePanel.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	genre: 'action',
};

function setup() {
	return mount(<FilmsByGenrePanel {...props}/>);
}

describe('FilmsByGenrePanel', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<FilmsByGenrePanel {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('span').text()).toBe(`Films by ${props.genre} genre`);
	});
});

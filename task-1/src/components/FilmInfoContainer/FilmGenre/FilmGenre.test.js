import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmGenre from './FilmGenre.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	genre: 'action',
};

function setup() {
	return mount(<FilmGenre {...props}/>);
}

describe('FilmGenre', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<FilmGenre {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('span').text()).toBe(props.genre);
	});
});

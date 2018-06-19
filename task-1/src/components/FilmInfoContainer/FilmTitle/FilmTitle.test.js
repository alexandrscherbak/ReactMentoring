import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmTitle from './FilmTitle.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	title: 'title',
};

function setup() {
	return mount(<FilmTitle {...props}/>);
}

describe('FilmTitle', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<FilmTitle {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('span').text()).toBe(props.title);
	});
});

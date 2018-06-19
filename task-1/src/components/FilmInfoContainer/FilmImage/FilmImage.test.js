import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmImage from './FilmImage.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	title: 'title',
	imageUrl: 'imageUrl',
};

function setup() {
	return mount(<FilmImage {...props}/>);
}

describe('FilmImage', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<FilmImage {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('img').html()).toContain(props.title);
	});
});

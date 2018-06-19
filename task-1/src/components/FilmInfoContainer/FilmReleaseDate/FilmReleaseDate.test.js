import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmReleaseDate from './FilmReleaseDate.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	releaseDate: '2018-04-01',
};

function setup() {
	return mount(<FilmReleaseDate {...props}/>);
}

describe('FilmReleaseDate', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<FilmReleaseDate {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('span').text()).toBe(props.releaseDate.slice(0, 4));
	});
});

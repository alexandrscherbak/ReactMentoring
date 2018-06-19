import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PageNotFound from './PageNotFound.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
	return mount(<PageNotFound/>);
}

describe('PageNotFound', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<PageNotFound/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('h1').text()).toBe('Page Not Found');
	});
});

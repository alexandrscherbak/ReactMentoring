import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorBoundary from './ErrorBoundary.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
	const props = {
		children: <h2>rendered</h2>
	};
	const enzymeWrapper = mount(<ErrorBoundary {...props} />);
	return {
		props,
		enzymeWrapper
	};
}

describe('ErrorBoundary', () => {
	test('snapshot', () => {
		const props = {
			children: <h2>rendered</h2>
		};
		const component = renderer.create(
			<ErrorBoundary {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const { enzymeWrapper } = setup();
		enzymeWrapper.setState({hasError: true});
		expect(enzymeWrapper.find('h1').text()).toBe('Something went wrong.');
		enzymeWrapper.setState({hasError: false});
		expect(enzymeWrapper.find('h2').text()).toBe('rendered');
	});
});

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmsTable from './FilmsTable.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const props = {
	filmsInfo: [
		{
			id: 1,
			poster_path: 'poster_path1',
			title: 'film1',
			release_date: '2018-04-01',
			genres: ['action', 'drama'],
		},
		{
			id: 2,
			poster_path: 'poster_path2',
			title: 'film2',
			release_date: '2018-04-01',
			genres: ['action', 'drama'],
		},
	],
	selectMovie: jest.fn(),
};

function setup() {
	return mount(<FilmsTable {...props}/>);
}

describe('FilmsTable', () => {
	test('snapshot', () => {
		const component = renderer.create(
			<FilmsTable {...props}/>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render self and subcomponents', () => {
		const enzymeWrapper = setup();
		expect(enzymeWrapper.find('.films-table').children().length).toBe(props.filmsInfo.length + 1);
	});
});

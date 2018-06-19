import SearchByActions from '../search-by.action.js';

describe('SearchByActions', () => {
	test('setSearchBy', () => {
		expect(SearchByActions.setSearchBy(123)).toEqual({
			type: SearchByActions.SET_SEARCH_BY,
			payload: 123,
		});
	});
});

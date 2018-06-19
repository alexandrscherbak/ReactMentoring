import SearchValueActions from '../search-value.action.js';

describe('SearchValueActions', () => {
	test('setSearchValue', () => {
		expect(SearchValueActions.setSearchValue(123)).toEqual({
			type: SearchValueActions.SET_SEARCH_VALUE,
			payload: 123,
		});
	});
});

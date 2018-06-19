import SortByActions from '../sort-by.action.js';

describe('SortByActions', () => {
	test('setSortBy', () => {
		expect(SortByActions.setSortBy(123)).toEqual({
			type: SortByActions.SET_SORT_BY,
			payload: 123,
		});
	});
});

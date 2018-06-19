import sortBy from '../sort-by.reducer.js';
import SortByActions from '../../actions/sort-by.action.js';


describe('sortBy reducer', () => {
	test('initial state', () => {
		expect(sortBy(undefined, {})).toBe('vote_average');
	});
	test('should handle SET_SORT_BY with value', () => {
		expect(sortBy(undefined, SortByActions.setSortBy(123))).toBe(123);
	});
	test('should handle SET_SORT_BY without value', () => {
		expect(sortBy(undefined, SortByActions.setSortBy())).toBe('vote_average');
	});
});

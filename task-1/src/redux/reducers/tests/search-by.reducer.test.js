import searchBy from '../search-by.reducer.js';
import SearchByActions from '../../actions/search-by.action.js';


describe('searchBy reducer', () => {
	test('initial state', () => {
		expect(searchBy(undefined, {})).toBe('title');
	});
	test('should handle SET_SEARCH_BY with value', () => {
		expect(searchBy(undefined, SearchByActions.setSearchBy(123))).toBe(123);
	});
	test('should handle SET_SEARCH_BY without value', () => {
		expect(searchBy(undefined, SearchByActions.setSearchBy())).toBe('title');
	});
});

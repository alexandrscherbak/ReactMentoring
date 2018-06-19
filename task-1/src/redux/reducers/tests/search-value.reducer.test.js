import searchValue from '../search-value.reducer.js';
import SearchValueActions from '../../actions/search-value.action.js';


describe('searchValue reducer', () => {
	test('initial state', () => {
		expect(searchValue(undefined, {})).toBe('');
	});
	test('should handle SET_SEARCH_VALUE with value', () => {
		expect(searchValue(undefined, SearchValueActions.setSearchValue(123))).toBe(123);
	});
	test('should handle SET_SEARCH_VALUE without value', () => {
		expect(searchValue(undefined, SearchValueActions.setSearchValue())).toBe('');
	});
});

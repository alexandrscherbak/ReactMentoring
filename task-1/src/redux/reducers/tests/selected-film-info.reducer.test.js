import selectedFilmInfo from '../selected-film-info.reducer.js';
import SelectedFilmInfoActions from '../../actions/selected-film-info.action.js';


describe('selectedFilmInfo reducer', () => {
	test('initial state', () => {
		expect(selectedFilmInfo(undefined, {})).toBe(null);
	});
	test('should handle LOAD_SELECTED_FILM_INFO_STARTED', () => {
		expect(selectedFilmInfo(undefined, SelectedFilmInfoActions.loadSelectedFilmInfoStarted())).toBe(null);
	});
	test('should handle LOAD_SELECTED_FILM_INFO_FAILED', () => {
		expect(selectedFilmInfo(undefined, SelectedFilmInfoActions.loadSelectedFilmInfoFailed())).toBe(null);
	});
	test('should handle RESET_SELECTED_FILM', () => {
		expect(selectedFilmInfo(undefined, SelectedFilmInfoActions.resetSelectedFilm())).toBe(null);
	});
	test('should handle LOAD_SELECTED_FILM_INFO_SUCCEEDED', () => {
		expect(selectedFilmInfo(undefined, SelectedFilmInfoActions.loadSelectedFilmInfoSucceeded(123))).toBe(123);
	});
});

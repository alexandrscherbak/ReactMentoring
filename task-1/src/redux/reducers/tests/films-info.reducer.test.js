import filmsInfo from '../films-info.reducer.js';
import FilmsInfoActions from '../../actions/films-info.action.js';


describe('filmsInfo reducer', () => {
	test('initial state', () => {
		expect(filmsInfo(undefined, {})).toEqual([]);
	});
	test('should handle LOAD_FILMS_INFO_STARTED', () => {
		expect(filmsInfo(undefined, FilmsInfoActions.loadFilmsInfoStarted())).toEqual([]);
	});
	test('should handle LOAD_FILMS_INFO_SUCCEEDED', () => {
		expect(filmsInfo(undefined, FilmsInfoActions.loadFilmsInfoSucceeded([123]))).toEqual([123]);
	});
	test('should handle LOAD_FILMS_INFO_FAILED', () => {
		expect(filmsInfo(undefined, FilmsInfoActions.loadFilmsInfoFailed())).toEqual([]);
	});
});

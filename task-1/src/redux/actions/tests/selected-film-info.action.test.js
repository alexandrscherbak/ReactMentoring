import SelectedFilmInfoActions from '../selected-film-info.action.js';
import MoviesService from '../../../components/services/movies.service.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import FilmsInfoActions from '../films-info.action.js';

jest.mock('../../../components/services/movies.service.js', () => {
	return class {
		getMovies() {
			return Promise.resolve([123]);
		}
		getMovieById(shouldFail) {
			return shouldFail ? Promise.reject('error') : Promise.resolve({genres: [123]});
		}
	}
});

describe('SelectedFilmInfoActions', () => {
	test('loadSelectedFilmInfoStarted', () => {
		expect(SelectedFilmInfoActions.loadSelectedFilmInfoStarted()).toEqual({
			type: SelectedFilmInfoActions.LOAD_SELECTED_FILM_INFO_STARTED,
		});
	});
	test('loadSelectedFilmInfoSucceeded', () => {
		expect(SelectedFilmInfoActions.loadSelectedFilmInfoSucceeded(123)).toEqual({
			type: SelectedFilmInfoActions.LOAD_SELECTED_FILM_INFO_SUCCEEDED,
			payload: 123,
		});
	});
	test('loadSelectedFilmInfoFailed', () => {
		expect(SelectedFilmInfoActions.loadSelectedFilmInfoFailed(123)).toEqual({
			type: SelectedFilmInfoActions.LOAD_SELECTED_FILM_INFO_FAILED,
			error: 123,
		});
	});
	test('loadSelectedFilmInfoFailed', () => {
		expect(SelectedFilmInfoActions.resetSelectedFilm()).toEqual({
			type: SelectedFilmInfoActions.RESET_SELECTED_FILM,
		});
	});
	test('loadSelectedFilmInfo', () => {
		const middlewares = [thunk];
		const mockStore = configureMockStore(middlewares);

		const expectedSuccessActions = [
			{ type: SelectedFilmInfoActions.LOAD_SELECTED_FILM_INFO_STARTED },
			{ type: SelectedFilmInfoActions.LOAD_SELECTED_FILM_INFO_SUCCEEDED,	payload: {genres: [123]} },
			{ type: FilmsInfoActions.LOAD_FILMS_INFO_STARTED, payload: undefined },
			{ type: FilmsInfoActions.LOAD_FILMS_INFO_SUCCEEDED,	payload: [123] }
		];
		const expectedFailActions = [
			{ type: SelectedFilmInfoActions.LOAD_SELECTED_FILM_INFO_STARTED },
			{ type: SelectedFilmInfoActions.LOAD_SELECTED_FILM_INFO_FAILED, error: 'error' }
		];
		const storeSuccess = mockStore({ selectedFilmInfo: null, filmsInfo: [] });
		const storeFail = mockStore({ selectedFilmInfo: null, filmsInfo: [] });

		storeSuccess.dispatch(SelectedFilmInfoActions.loadSelectedFilmInfo(false)).then(() => {
			expect(storeSuccess.getActions()).toEqual(expectedSuccessActions);
		});
		storeFail.dispatch(SelectedFilmInfoActions.loadSelectedFilmInfo(true)).then(() => {
			expect(storeFail.getActions()).toEqual(expectedFailActions);
		});
	});
});

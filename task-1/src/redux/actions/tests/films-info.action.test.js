import FilmsInfoActions from '../films-info.action.js';
import MoviesService from '../../../components/services/movies.service.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('../../../components/services/movies.service.js', () => {
	return class {
		getMovies(shouldFail) {
			return shouldFail ? Promise.reject('error') : Promise.resolve([123]);
		}
	}
});

describe('FilmsInfoActions', () => {
	test('loadFilmsInfoStarted', () => {
		expect(FilmsInfoActions.loadFilmsInfoStarted()).toEqual({
			type: FilmsInfoActions.LOAD_FILMS_INFO_STARTED,
			payload: undefined,
		});
	});
	test('loadFilmsInfoSucceeded', () => {
		expect(FilmsInfoActions.loadFilmsInfoSucceeded(123)).toEqual({
			type: FilmsInfoActions.LOAD_FILMS_INFO_SUCCEEDED,
			payload: 123,
		});
	});
	test('loadFilmsInfoFailed', () => {
		expect(FilmsInfoActions.loadFilmsInfoFailed(123)).toEqual({
			type: FilmsInfoActions.LOAD_FILMS_INFO_FAILED,
			payload: undefined,
			error: 123,
		});
	});
	test('loadFilmsInfo', () => {
		const middlewares = [thunk];
		const mockStore = configureMockStore(middlewares);

		const expectedSuccessActions = [
			{ type: FilmsInfoActions.LOAD_FILMS_INFO_STARTED, payload: undefined },
			{ type: FilmsInfoActions.LOAD_FILMS_INFO_SUCCEEDED,	payload: [123] }
		];
		const expectedFailActions = [
			{ type: FilmsInfoActions.LOAD_FILMS_INFO_STARTED, payload: undefined },
			{ type: FilmsInfoActions.LOAD_FILMS_INFO_FAILED, payload: undefined, error: 'error' }
		];
		const storeSuccess = mockStore({ filmsInfo: [] });
		const storeFail = mockStore({ filmsInfo: [] });

		storeSuccess.dispatch(FilmsInfoActions.loadFilmsInfo(false)).then(() => {
			expect(storeSuccess.getActions()).toEqual(expectedSuccessActions);
		});
		storeFail.dispatch(FilmsInfoActions.loadFilmsInfo(true)).then(() => {
			expect(storeFail.getActions()).toEqual(expectedFailActions);
		});
	});
});

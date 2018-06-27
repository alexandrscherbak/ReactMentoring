import MoviesService from '../../components/services/movies.service.js';
import { call, put, takeLatest } from 'redux-saga/effects';

const moviesService = new MoviesService();

export default class FilmsInfoActions {
	static get LOAD_FILMS_INFO() {
		return 'LOAD_FILMS_INFO';
	}
	static get LOAD_FILMS_INFO_STARTED() {
		return 'LOAD_FILMS_INFO_STARTED';
	}
	static get LOAD_FILMS_INFO_SUCCEEDED() {
		return 'LOAD_FILMS_INFO_SUCCEEDED';
	}
	static get LOAD_FILMS_INFO_FAILED() {
		return 'LOAD_FILMS_INFO_FAILED';
	}

	static loadFilmsInfo(payload) {
		return {
			type: this.LOAD_FILMS_INFO,
			payload,
		}
	}

	static loadFilmsInfoStarted() {
		return {
			type: this.LOAD_FILMS_INFO_STARTED,
			payload: undefined,
		}
	}

	static loadFilmsInfoSucceeded(payload) {
		return {
			type: this.LOAD_FILMS_INFO_SUCCEEDED,
			payload,
		}
	}

	static loadFilmsInfoFailed(error) {
		return {
			type: this.LOAD_FILMS_INFO_FAILED,
			payload: undefined,
			error,
		}
	}

	static * loadFilmsInfoAsync(action) {
		try {
			yield put(this.loadFilmsInfoStarted());
			const films = yield call(moviesService.getMovies.bind(moviesService), action.payload);
			yield put(this.loadFilmsInfoSucceeded(films));
		} catch (error) {
			yield put(this.loadFilmsInfoFailed(error));
		}
	}

	static * loadFilmsInfoSaga() {
		yield takeLatest(this.LOAD_FILMS_INFO, this.loadFilmsInfoAsync.bind(this));
	}

	// static loadFilmsInfo(payload) {
	// 	return dispatch => {
	// 		dispatch(this.loadFilmsInfoStarted());
	// 		return moviesService.getMovies(payload)
	// 			.then(response => dispatch(this.loadFilmsInfoSucceeded(response)))
	// 			.catch(error => dispatch(this.loadFilmsInfoFailed(error)));
	// 	};
	// }
}

import MoviesService from '../../components/services/movies.service.js';
import FilmsInfoActions from './films-info.action.js';
import { call, put, takeLatest } from 'redux-saga/effects';

const moviesService = new MoviesService();

export default class SelectedFilmInfoActions {
	static get LOAD_SELECTED_FILM_INFO() {
		return 'LOAD_SELECTED_FILM_INFO';
	}
	static get LOAD_SELECTED_FILM_INFO_STARTED() {
		return 'LOAD_SELECTED_FILM_INFO_STARTED';
	}
	static get LOAD_SELECTED_FILM_INFO_SUCCEEDED() {
		return 'LOAD_SELECTED_FILM_INFO_SUCCEEDED';
	}
	static get LOAD_SELECTED_FILM_INFO_FAILED() {
		return 'LOAD_SELECTED_FILM_INFO_FAILED';
	}
	static get RESET_SELECTED_FILM() {
		return 'RESET_SELECTED_FILM';
	}

	static resetSelectedFilm() {
		return {
			type: this.RESET_SELECTED_FILM,
		}
	}

	static loadSelectedFilmInfo(payload) {
		return {
			type: this.LOAD_SELECTED_FILM_INFO,
			payload,
		}
	}

	static loadSelectedFilmInfoStarted() {
		return {
			type: this.LOAD_SELECTED_FILM_INFO_STARTED,
		}
	}

	static loadSelectedFilmInfoSucceeded(payload) {
		return {
			type: this.LOAD_SELECTED_FILM_INFO_SUCCEEDED,
			payload,
		}
	}

	static loadSelectedFilmInfoFailed(error) {
		return {
			type: this.LOAD_SELECTED_FILM_INFO_FAILED,
			error,
		}
	}

	static * loadSelectedFilmInfoAsync(action) {
		try {
			yield put(this.loadSelectedFilmInfoStarted());
			const film = yield call(moviesService.getMovieById.bind(moviesService), action.payload);
			yield put(this.loadSelectedFilmInfoSucceeded(film));
			yield put(FilmsInfoActions.loadFilmsInfo({
				search: film.genres[0],
				searchBy: 'genres',
			}));
		} catch (error) {
			yield put(this.loadSelectedFilmInfoFailed(error));
		}
	}

	static * loadSelectedFilmInfoSaga() {
		yield takeLatest(this.LOAD_SELECTED_FILM_INFO, this.loadSelectedFilmInfoAsync.bind(this));
	}

	// static loadSelectedFilmInfo(payload) {
	// 	return dispatch => {
	// 		dispatch(this.loadSelectedFilmInfoStarted());
	// 		return moviesService.getMovieById(payload)
	// 			.then(response => {
	// 				dispatch(this.loadSelectedFilmInfoSucceeded(response));
	// 				dispatch(FilmsInfoActions.loadFilmsInfo({
	// 					search: response.genres[0],
	// 					searchBy: 'genres',
	// 				}));
	// 			})
	// 			.catch(error => dispatch(this.loadSelectedFilmInfoFailed(error)));
	// 	};
	// }
}

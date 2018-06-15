import MoviesService from '../../components/services/movies.service.js';
import FilmsInfoActions from './films-info.action.js'

const moviesService = new MoviesService();

export default class SelectedFilmInfoActions {
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

	static loadSelectedFilmInfo(payload) {
		return dispatch => {
			dispatch(this.loadSelectedFilmInfoStarted());
			return moviesService.getMovieById(payload)
				.then(response => {
					dispatch(this.loadSelectedFilmInfoSucceeded(response));
					dispatch(FilmsInfoActions.loadFilmsInfo({
						search: response.genres[0],
						searchBy: 'genres',
					}));
				})
				.catch(error => dispatch(this.loadSelectedFilmInfoFailed(error)));
		};
	}
}

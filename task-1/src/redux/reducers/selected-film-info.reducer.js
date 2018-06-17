import SelectedFilmInfoActions from '../actions/selected-film-info.action.js';

export default function selectedFilmInfo(state = null, action) {
	switch (action.type) {
		case SelectedFilmInfoActions.LOAD_SELECTED_FILM_INFO_STARTED:
		case SelectedFilmInfoActions.LOAD_SELECTED_FILM_INFO_FAILED:
		case SelectedFilmInfoActions.RESET_SELECTED_FILM:
			return null;
		case SelectedFilmInfoActions.LOAD_SELECTED_FILM_INFO_SUCCEEDED:
			return action.payload;
		default:
			return state;
	}
}

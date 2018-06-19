import FilmsInfoActions from '../actions/films-info.action.js';

export default function filmsInfo(state = [], action) {
	switch (action.type) {
		case FilmsInfoActions.LOAD_FILMS_INFO_STARTED:
			return [];
		case FilmsInfoActions.LOAD_FILMS_INFO_SUCCEEDED:
			return action.payload;
		case FilmsInfoActions.LOAD_FILMS_INFO_FAILED:
			return [];
		default:
			return state;
	}
}

import SearchByActions from '../actions/search-by.action.js';

export default function searchBy(state = 'title', action) {
	switch (action.type) {
		case SearchByActions.SET_SEARCH_BY:
			return action.payload;
		default:
			return state;
	}
}

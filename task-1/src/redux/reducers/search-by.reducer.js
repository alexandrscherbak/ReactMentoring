import SearchByActions from '../actions/search-by.action.js';

const INITIAL_STATE = 'title';

export default function searchBy(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SearchByActions.SET_SEARCH_BY:
			return action.payload || INITIAL_STATE;
		default:
			return state;
	}
}

import SearchValueActions from '../actions/search-value.action.js';

const INITIAL_STATE = '';

export default function searchValue(state = '', action) {
	switch (action.type) {
		case SearchValueActions.SET_SEARCH_VALUE:
			return action.payload || INITIAL_STATE;
		default:
			return state;
	}
}

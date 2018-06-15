import SearchValueActions from '../actions/search-value.action.js';

export default function searchValue(state = '', action) {
	switch (action.type) {
		case SearchValueActions.SET_SEARCH_VALUE:
			return action.payload;
		default:
			return state;
	}
}

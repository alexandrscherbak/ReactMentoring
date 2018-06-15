import SortByActions from '../actions/sort-by.action.js';

export default function sortBy(state = 'vote_average', action) {
	switch (action.type) {
		case SortByActions.SET_SORT_BY:
			return action.payload;
		default:
			return state;
	}
}

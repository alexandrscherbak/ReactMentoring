import SortByActions from '../actions/sort-by.action.js';

const INITIAL_STATE = 'vote_average';

export default function sortBy(state = 'vote_average', action) {
	switch (action.type) {
		case SortByActions.SET_SORT_BY:
			return action.payload || INITIAL_STATE;
		default:
			return state;
	}
}

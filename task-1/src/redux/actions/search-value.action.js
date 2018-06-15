export default class SearchValueActions {
	static get SET_SEARCH_VALUE() {
		return 'SET_SEARCH_VALUE';
	}

	static setSearchValue(payload) {
		return {
			type: this.SET_SEARCH_VALUE,
			payload,
		}
	}
}

export default class SearchByActions {
	static get SET_SEARCH_BY() {
		return 'SET_SEARCH_BY';
	}

	static setSearchBy(payload) {
		return {
			type: this.SET_SEARCH_BY,
			payload,
		}
	}
}

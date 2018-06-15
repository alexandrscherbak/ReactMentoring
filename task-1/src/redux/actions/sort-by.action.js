export default class SortByActions {
	static get SET_SORT_BY() {
		return 'SET_SORT_BY';
	}

	static setSortBy(payload) {
		return {
			type: this.SET_SORT_BY,
			payload,
		}
	}
}

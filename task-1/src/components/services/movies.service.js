export default class MoviesService {
	constructor() {
		this.endPoint = 'http://react-cdp-api.herokuapp.com/movies';
	}

	getMovies({search, sortBy, sortOrder, searchBy = 'title', filter, offset, limit} = {}) {
		let requestUrl = this.endPoint;
		if (search) {
			requestUrl += `?search=${search}`;
			if (sortBy) {
				requestUrl += `&sortBy=${sortBy}`;
			}
			if (sortOrder) {
				requestUrl += `&sortOrder=${sortOrder}`;
			}
			if (searchBy) {
				requestUrl += `&searchBy=${searchBy}`;
			}
			if (filter) {
				requestUrl += `&filter=${filter}`;
			}
			if (offset) {
				requestUrl += `&offset=${offset}`;
			}
			if (limit) {
				requestUrl += `&limit=${limit}`;
			}
		}
		return fetch(
			encodeURI(requestUrl),
			{method: 'GET'}
		).then(response => response.json())
		.then(json => json.data);
	}
	getMovieById(id) {
		return fetch(
			`${this.endPoint}/${id}`,
			{method: 'GET'}
		).then(response => response.json());
	}
}

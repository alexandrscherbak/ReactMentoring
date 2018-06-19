import MoviesService from './movies.service.js';

const moviesService = new MoviesService();
const params = {
	search: 'search',
	sortBy: 'sortBy',
	sortOrder: 'sortOrder',
	searchBy: 'searchBy',
	filter: 'filter',
	offset: 'offset',
	limit: 'limit',
};

describe('MoviesService', () => {
	beforeEach(() => {
		fetch.resetMocks();
	});
	
	it('getMovies calls api and returns data', () => {
		fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
	
		let requestUrl = moviesService.endPoint;
		requestUrl += `?search=${params.search}`;
		requestUrl += `&sortBy=${params.sortBy}`;
		requestUrl += `&sortOrder=${params.sortOrder}`;
		requestUrl += `&searchBy=${params.searchBy}`;
		requestUrl += `&filter=${params.filter}`;
		requestUrl += `&offset=${params.offset}`;
		requestUrl += `&limit=${params.limit}`;

		moviesService.getMovies(params).then(res => {
			expect(res).toEqual('12345');
		});
	
		expect(fetch.mock.calls.length).toEqual(1);
		expect(fetch.mock.calls[0][0]).toEqual(encodeURI(requestUrl));
	});

	it('getMovies calls api only with specified and default params', () => {
		fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
	
		let requestUrl = moviesService.endPoint;
		requestUrl += `?search=${params.search}`;
		requestUrl += '&searchBy=title';

		moviesService.getMovies({search: params.search}).then(res => {
			expect(res).toEqual('12345');
		});
	
		expect(fetch.mock.calls.length).toEqual(1);
		expect(fetch.mock.calls[0][0]).toEqual(encodeURI(requestUrl));
	});

	it('getMovies returns empty array if no search provided', () => {
		moviesService.getMovies().then(res => {
			expect(res).toEqual([]);
		});
	});

	it('getMovieById calls api and returns data', () => {
		fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
		const id = 123;
	
		let requestUrl = `${moviesService.endPoint}/${id}`;

		moviesService.getMovieById(id).then(res => {
			expect(res.data).toEqual('12345');
		});
	
		expect(fetch.mock.calls.length).toEqual(1);
		expect(fetch.mock.calls[0][0]).toEqual(requestUrl);
	});
})
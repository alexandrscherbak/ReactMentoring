import app from '../app.reducer.js';


describe('app reducer', () => {
	test('initial state', () => {
		expect(app(undefined, {})).toEqual({
			searchValue: '',
			searchBy: 'title',
			sortBy: 'vote_average',
			filmsInfo: [],
			selectedFilmInfo: null,
		});
	});
});

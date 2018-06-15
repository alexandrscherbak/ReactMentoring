import {combineReducers} from 'redux';
import sortBy from './sort-by.reducer.js';
import searchBy from './search-by.reducer.js';
import searchValue from './search-value.reducer.js';
import filmsInfo from './films-info.reducer.js';
import selectedFilmInfo from './selected-film-info.reducer.js';

const app = combineReducers({
	searchValue,
	searchBy,
	sortBy,
	filmsInfo,
	selectedFilmInfo,
});

export default app;

import React from 'react';
import MainPage from '../MainPage/MainPage.jsx';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import FilmInfoPage from '../FilmInfoPage/FilmInfoPage.jsx';
import {connect} from 'react-redux';
import SelectedFilmInfoActions from '../../redux/actions/selected-film-info.action.js';

class _MoviesSearchApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ErrorBoundary>
					{
						this.props.selectedFilmInfo === null ?
							<MainPage selectMovie={filmId => this.props.selectMovie(filmId)}/> :
							<FilmInfoPage />
					}
			</ErrorBoundary>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedFilmInfo: state.selectedFilmInfo,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		selectMovie: id => dispatch(SelectedFilmInfoActions.loadSelectedFilmInfo(id)),
	};
}

const MoviesSearchApp = connect(
	mapStateToProps,
	mapDispatchToProps,
)(_MoviesSearchApp);

export default MoviesSearchApp;

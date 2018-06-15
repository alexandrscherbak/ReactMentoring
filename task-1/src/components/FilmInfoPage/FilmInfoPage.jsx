import React from 'react';
import FilmsTable from '../FilmsTable/FilmsTable.jsx';
import Footer from '../Footer/Footer.jsx';
import FilmsByGenrePanel from '../FilmsByGenrePanel/FilmsByGenrePanel.jsx';
import FilmFullInfoContainer from '../FilmFullInfoContainer/FilmFullInfoContainer.jsx';
import MoviesService from '../services/movies.service.js';
import {connect} from 'react-redux';
import SelectedFilmInfoActions from '../../redux/actions/selected-film-info.action.js';

class _FilmInfoPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<FilmFullInfoContainer
					searchClicked={() => this.props.resetSelectedFilm()}
					filmInfo={this.props.selectedFilmInfo}
				/>
				<FilmsByGenrePanel
					genre={this.props.selectedFilmInfo.genres[0]}
				/>
				<FilmsTable
					filmsInfo={this.props.filmsInfo || []}
					selectMovie={movie => this.props.selectMovie(movie.id)}
				/>
				<Footer/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedFilmInfo: state.selectedFilmInfo,
		filmsInfo: state.filmsInfo,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		selectMovie: id => dispatch(SelectedFilmInfoActions.loadSelectedFilmInfo(id)),
		resetSelectedFilm: id => dispatch(SelectedFilmInfoActions.resetSelectedFilm()),
	};
}

const FilmInfoPage = connect(
	mapStateToProps,
	mapDispatchToProps,
)(_FilmInfoPage);

export default FilmInfoPage;

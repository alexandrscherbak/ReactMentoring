import React from 'react';
import FilmsTable from '../FilmsTable/FilmsTable.jsx';
import Footer from '../Footer/Footer.jsx';
import FilmsByGenrePanel from '../FilmsByGenrePanel/FilmsByGenrePanel.jsx';
import FilmFullInfoContainer from '../FilmFullInfoContainer/FilmFullInfoContainer.jsx';
import MoviesService from '../services/movies.service.js';
import {connect} from 'react-redux';
import SelectedFilmInfoActions from '../../redux/actions/selected-film-info.action.js';
import { withRouter } from "react-router-dom";

export class FilmInfoPage extends React.Component {
	componentWillMount() {
		this.props.selectMovie(this.props.match.params.filmId);
	}

	constructor(props) {
		super(props);
	}

	goToMainPage() {
		this.props.history.push(`/search`);
	}

	selectMovie(filmId) {
		this.props.history.push(`/film/${filmId}`);
		this.props.selectMovie(filmId);
	}

	render() {
		return (
			<React.Fragment>
				{
					this.props.selectedFilmInfo ? 
						<React.Fragment>
							<FilmFullInfoContainer
								searchClicked={() => this.goToMainPage()}
								filmInfo={this.props.selectedFilmInfo}
							/>
							<FilmsByGenrePanel
								genre={this.props.selectedFilmInfo.genres[0]}
							/>
							<FilmsTable
								filmsInfo={this.props.filmsInfo || []}
								selectMovie={movie => this.selectMovie(movie.id)}
							/>
							<Footer/>
						</React.Fragment> :
						null
				}
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
	};
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(FilmInfoPage));

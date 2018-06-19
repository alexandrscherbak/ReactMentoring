import React from 'react';
import FilmsTable from '../FilmsTable/FilmsTable.jsx';
import Footer from '../Footer/Footer.jsx';
import ResultsInfoPanel from '../ResultsInfoPanel/ResultsInfoPanel.jsx';
import SearchPanel from '../SearchPanel/SearchPanel.jsx';
import NoData from '../NoData/NoData.jsx';
import {connect} from 'react-redux';
import FilmsInfoActions from '../../redux/actions/films-info.action.js';
import { withRouter } from "react-router-dom";
import SortByActions from '../../redux/actions/sort-by.action.js';
import SearchValueActions from '../../redux/actions/search-value.action.js';
import SearchByActions from '../../redux/actions/search-by.action.js';

export class MainPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const params = new URLSearchParams(this.props.location.search);
		const search = params.get('search');
		const searchBy = params.get('searchBy');
		const sortBy = params.get('sortBy');

		this.props.updateSearchValue(search);
		this.props.updateSearchBy(searchBy);
		this.props.updateSortBy(sortBy);

		this.props.updateFilmsInfo({
			search,
			searchBy,
			sortBy,
		});
	}

	selectMovie(filmId) {
		this.props.history.push(`/film/${filmId}`);
	}

	searchClicked() {
		const params = new URLSearchParams(this.props.location.search);
		const queryParams = [];
		queryParams.push(`search=${encodeURIComponent(this.props.searchValue)}`);
		queryParams.push(`searchBy=${encodeURIComponent(this.props.searchBy)}`);
		queryParams.push(`sortBy=${encodeURIComponent(this.props.sortBy)}`);
		this.props.history.push(`/search?${queryParams.join('&')}`);
		this.props.updateFilmsInfo({
			search: this.props.searchValue,
			searchBy: this.props.searchBy,
			sortBy: this.props.sortBy,
		});
	}

	render() {
		return (
			<React.Fragment>
				<SearchPanel
					searchClicked={() => this.searchClicked()}
				/>
				<ResultsInfoPanel
					count={this.props.filmsInfo.length}
				/>
				{
					this.props.filmsInfo.length ?
						<FilmsTable
							filmsInfo={this.props.filmsInfo}
							selectMovie={movie => this.selectMovie(movie.id)}
						/> :
						<NoData />
				}
				<Footer/>
			</React.Fragment>
		);
	}
}

export const mapStateToProps = state => {
	return {
		searchValue: state.searchValue,
		searchBy: state.searchBy,
		sortBy: state.sortBy,
		filmsInfo: state.filmsInfo,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		updateFilmsInfo: requestParams => dispatch(FilmsInfoActions.loadFilmsInfo(requestParams)),
		updateSearchValue: searchValue => dispatch(SearchValueActions.setSearchValue(searchValue)),
		updateSearchBy: searchBy => dispatch(SearchByActions.setSearchBy(searchBy)),
		updateSortBy: sortBy => dispatch(SortByActions.setSortBy(sortBy)),
	};
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainPage));

import React from 'react';
import FilmsTable from '../FilmsTable/FilmsTable.jsx';
import Footer from '../Footer/Footer.jsx';
import ResultsInfoPanel from '../ResultsInfoPanel/ResultsInfoPanel.jsx';
import SearchPanel from '../SearchPanel/SearchPanel.jsx';
import NoData from '../NoData/NoData.jsx';
import {connect} from 'react-redux';
import FilmsInfoActions from '../../redux/actions/films-info.action.js';


class _MainPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.updateFilmsInfo();
	}

	searchClicked() {
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
							selectMovie={movie => this.props.selectMovie(movie.id)}
						/> :
						<NoData />
				}
				<Footer/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
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
	};
}

const MainPage = connect(
	mapStateToProps,
	mapDispatchToProps,
)(_MainPage);

export default MainPage;
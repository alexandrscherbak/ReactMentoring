import React from 'react';
import Logo from '../Logo/Logo.jsx';
import {connect} from 'react-redux';
import SearchValueActions from '../../redux/actions/search-value.action.js';
import SearchByActions from '../../redux/actions/search-by.action.js';

class _SearchPanel extends React.Component {
	constructor(props) {
		super(props);
	}

	searchClicked() {
		this.props.searchClicked();
	}

	render() {
		return (
			<div className="search-panel-container">
				<Logo />
				<div className="search-panel">
					<h1>Find your movie</h1>
					<input value={this.props.searchValue} onChange={evt => this.props.updateSearchValue(evt.target.value)}/>
					<div className="search-buttons-container">
						<div className="search-by-buttons-container">
							<span>Search By</span>
							<button
								onClick={() => this.props.updateSearchBy('title')}
								className={this.props.searchBy === 'title' ? 'active-button' : ''}
							>Title</button>
							<button
								onClick={() => this.props.updateSearchBy('genres')}
								className={this.props.searchBy === 'genres' ? 'active-button' : ''}
							>Genre</button>
						</div>
						<div>
							<button
								onClick={() => this.searchClicked()}
							>Search</button>
						</div>
					</div>
				</div>
				<style jsx>
					{`
						.search-panel-container {
							background-image: url('headerBackground.jpeg');
							padding: 20px 100px;
						}
						.search-panel {
							color: #b9b9b9;
						}
						h1, span {
							text-transform: uppercase;
						}
						.search-buttons-container {
							display: flex;
							justify-content: space-between;
						}
						.search-by-buttons-container {
							display: flex;
						}
						input {
							width: 50%;
							margin-bottom: 20px;
						}
						button.active-button {
							background-color: pink;
						}
					`}
				</style> 
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		searchValue: state.searchValue,
		searchBy: state.searchBy,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		updateSearchValue: searchValue => dispatch(SearchValueActions.setSearchValue(searchValue)),
		updateSearchBy: searchBy => dispatch(SearchByActions.setSearchBy(searchBy)),
	};
}

const SearchPanel = connect(
	mapStateToProps,
	mapDispatchToProps,
)(_SearchPanel);

export default SearchPanel;

import React from 'react';
import {connect} from 'react-redux';
import SortByActions from '../../../redux/actions/sort-by.action.js';

const _ResultsSort = ({sortBy, updateSortBy}) => (
	<div>
		<span>Sort by</span>
		<button
			onClick={() => updateSortBy('release_date')}
			className={sortBy === 'release_date' ? 'active-button' : ''}
		>release date</button>
		<button
			onClick={() => updateSortBy('vote_average')}
			className={sortBy === 'vote_average' ? 'active-button' : ''}
		>rating</button>

		 <style jsx>
			{`
				button.active-button {
					background-color: pink;
				}
			`}
		</style> 
	</div>
);

const mapStateToProps = state => {
	return {
		sortBy: state.sortBy,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		updateSortBy: sortBy => dispatch(SortByActions.setSortBy(sortBy)),
	};
}

const ResultsSort = connect(
	mapStateToProps,
	mapDispatchToProps,
)(_ResultsSort);

export default ResultsSort;

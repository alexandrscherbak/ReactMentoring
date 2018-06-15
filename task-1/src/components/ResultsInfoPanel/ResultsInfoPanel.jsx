import React from 'react';
import ResultsCount from './ResultsCount/ResultsCount.jsx';
import ResultsSort from './ResultsSort/ResultsSort.jsx';

export default class ResultsInfoPanel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ResultsCount count={this.props.count}/>
				<ResultsSort/>

				<style jsx>
					{`
						div {
							display: flex;
							justify-content: space-between;
							background-color: #f5f5f5;
							color: #919191;
							font-weight: bold;
							height: 50px;
							line-height: 50px;
							padding: 0 100px;
						}
					`}
				</style> 
			</div>
		);
	}
};

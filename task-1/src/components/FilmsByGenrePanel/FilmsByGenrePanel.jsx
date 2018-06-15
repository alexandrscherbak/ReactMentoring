import React from 'react';

const FilmsByGenrePanel = ({genre}) => (
	<div>
		<span>Films by {genre} genre</span>

		<style jsx>
			{`
				div {
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

export default FilmsByGenrePanel;

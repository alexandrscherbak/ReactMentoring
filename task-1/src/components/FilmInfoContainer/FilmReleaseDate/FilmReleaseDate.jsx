import React from 'react';

const FilmReleaseDate = ({releaseDate}) => (
	<div>
		<span>{releaseDate.slice(0, 4)}</span>

		<style jsx>
			{`
				span {
					color: #9e9e9e;
					border: 1px solid #9e9e9e;
				}
			`}
		</style>
	</div>
);

export default FilmReleaseDate;

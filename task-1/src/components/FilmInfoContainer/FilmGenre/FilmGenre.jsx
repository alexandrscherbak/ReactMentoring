import React from 'react';

const FilmGenre = ({genre}) => (
	<div>
		<span>{genre}</span>

		<style jsx>
			{`
				span {
					font-size: 12px;
					color: #9e9e9e;
				}
			`}
		</style>
	</div>
);

export default FilmGenre;

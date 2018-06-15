import React from 'react';

const FilmTitle = ({title}) => (
	<div>
		<span>{title}</span>

		<style jsx>
			{`
				span {
					font-weight: bold;
					color: #919191;
				}
			`}
		</style>
	</div>
);

export default FilmTitle;

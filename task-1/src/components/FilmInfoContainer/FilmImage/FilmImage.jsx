import React from 'react';

const FilmImage = ({imageUrl, title}) => (
	<React.Fragment>
		<img src={imageUrl} alt={title} />

		<style jsx>
			{`
				img {
					max-width: 100%;
				}
			`}
		</style>
	</React.Fragment>
);

export default FilmImage;

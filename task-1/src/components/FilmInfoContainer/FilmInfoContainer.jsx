import React from 'react';
import FilmGenre from './FilmGenre/FilmGenre.jsx';
import FilmImage from './FilmImage/FilmImage.jsx';
import FilmReleaseDate from './FilmReleaseDate/FilmReleaseDate.jsx';
import FilmTitle from './FilmTitle/FilmTitle.jsx';

const FilmInfoContainer = ({filmInfo, selectMovie}) => (
	<div className="film-info-container" onClick={() => selectMovie(filmInfo)}>
		<FilmImage imageUrl={filmInfo.poster_path} title={filmInfo.title}></FilmImage>
		<div className="title-and-date">
			<FilmTitle title={filmInfo.title}></FilmTitle>
			<FilmReleaseDate releaseDate={filmInfo.release_date}></FilmReleaseDate>
		</div>
		<FilmGenre genre={filmInfo.genres[0]}></FilmGenre>

		<style jsx>
			{`
				.film-info-container {
					width: 300px;
					height: 600px;
					cursor: pointer;
				}
				.title-and-date {
					display: flex;
					justify-content: space-between;
				}
			`}
		</style>
	</div>
);

export default FilmInfoContainer;

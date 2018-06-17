import React from 'react';
import Logo from '../Logo/Logo.jsx';
import FilmImage from '../FilmInfoContainer/FilmImage/FilmImage.jsx';

export default class FilmFullInfoContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			filmInfo: props.filmInfo,
		}
	}

	searchClicked() {
		this.props.searchClicked();
	}

	render() {
		return (
			<div className="film-full-info-container">
				<div className="film-full-info-header-row">
					<Logo />
					<button
						onClick={() => this.searchClicked()}
					>Search</button>
				</div>
				<div className="film-full-info">
					<div className="film-image">
						<img src={this.state.filmInfo.poster_path} alt={this.state.filmInfo.title} />
					</div>
					<div className="film-info">
						<h1>{this.state.filmInfo.title}</h1>
						<div className="release-and-rating">
							<span>{this.state.filmInfo.release_date.slice(0, 4)}</span>
							<span>{this.state.filmInfo.vote_average}</span>
						</div>
						<span>{this.state.filmInfo.overview}</span>
					</div>
				</div>

				<style jsx>
					{`
						.film-full-info-container {
							padding: 20px 100px;
							background-image: url('../headerBackground2.jpg');
						}
						.film-image {
							flex-basis: 300px;
							flex-shrink: 0;
						}
						img {
							max-width: 100%;
						}
						.film-full-info-header-row {
							display: flex;
							justify-content: space-between;
						}
						h1 {
							color: pink;
						}
						.film-full-info {
							display: flex;
						}
						.film-info {
							margin-left: 50px;
						}
						.release-and-rating {
							display: flex;
							justify-content: space-between;
						}
					`}
				</style> 
			</div>
		);
	}
};

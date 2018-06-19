import React from 'react';
import FilmInfoContainer from '../FilmInfoContainer/FilmInfoContainer.jsx';

const FilmsTable = ({filmsInfo, selectMovie}) => (
	<div className='films-table'>
		{
			filmsInfo.map(filmInfo => {
				return <FilmInfoContainer
					key={filmInfo.id}
					filmInfo={filmInfo}
					selectMovie={selectMovie}
				/>;
			})
		}

		 <style jsx>
			{`
				.films-table {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between; 
					padding: 0 30px;
					background-color: #fefcff;
				}
			`}
		</style> 
	</div>
);

export default FilmsTable;

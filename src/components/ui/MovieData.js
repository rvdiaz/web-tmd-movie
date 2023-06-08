import React, { useCallback, useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import getStringByArray from '../../helpers/getStringByArray';

export const MovieData = () => {
  const {movieData}=useContext(MovieContext);
  const {original_title,overview,genres,production_companies,release_date,runtime,budget,vote_average}=movieData;

  const genresText=useCallback(()=>{
    return getStringByArray(genres);
  } ,[genres])

  const companiesText=useCallback(()=>{
    return getStringByArray(production_companies);
  } ,[production_companies])

  const genresTitles=genresText();
  const productionCompaniesTitle=companiesText();
  return (
    <div className='movieData'>
      <h1 className='movieTitle'>{original_title}</h1>
      <p className='movieDescription'>{overview}</p>
      <div className='movieAdittionalDetails'>
        <div className='additionalDetailsGroup'>
          <h4 className='detailTitles'>{genresTitles}</h4>
          <p className='detailSubtitles'>{productionCompaniesTitle}</p>
        </div>
        <div className='additionalDetailsGroup'>
          <p className='detailSubtitles'>Original Release:</p>
          <h4 className='detailTitles'>{release_date}</h4>
        </div>
        <div className='additionalDetailsGroup'>
          <p className='detailSubtitles'>Running Time:</p>
          <h4 className='detailTitles'>{runtime}</h4>
        </div>
        <div className='additionalDetailsGroup'>
          <p className='detailSubtitles'>Box Office:</p>
          <h4 className='detailTitles'>{budget}</h4>
        </div>
        <div className='additionalDetailsGroup'>
          <p className='detailSubtitles'>Vote Average:</p>
          <h4 className='detailTitles'>{vote_average}</h4>
        </div>
      </div>
    </div>
  )
}

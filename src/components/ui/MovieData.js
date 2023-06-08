import React, { useCallback, useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'

export const MovieData = () => {
  const {movieData}=useContext(MovieContext);
  const {original_title,overview,genres}=movieData;

  const genresText=useCallback(()=>{
    let aux='';
    if(genres){
    genres.map((gen,index)=>{
      if(index==0)
      aux+=gen.name;
      else
      aux+=', '+gen.name;
    })
    }
    return aux;
  } ,[genres])
  
  const genresTitles=genresText();

  return (
    <div className='movieData'>
      <h1 className='movieTitle'>{original_title}</h1>
      <p className='movieDescription'>{overview}</p>
      <div className='movieAdittionalDetails'>
        <h4 className='movieGenres'>{genresTitles}</h4>
      </div>
    </div>
  )
}

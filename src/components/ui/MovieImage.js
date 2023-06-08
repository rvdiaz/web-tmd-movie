import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'

export const MovieImage = () => {
  const {movieData}=useContext(MovieContext);
  const {backdrop_path}=movieData;

  return (
    <div className='movieImageWrapper'>
      <img src={backdrop_path}/>
    </div>
  )
}

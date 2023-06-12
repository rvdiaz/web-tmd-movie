import React from 'react'
import { MovieData } from '../ui/MovieData'
import { MovieImage } from '../ui/MovieImage'

export const CardMovie = () => {
 
  return (
    <div className="cardWrapper animationCard">
        <MovieImage/>
        <MovieData/>
    </div>
  )
}

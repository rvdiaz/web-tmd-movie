import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext';
import { useFetch } from '../hooks/useFetch';
import { CardMovie } from './CardMovie';
import { Footer } from './Footer';
import { Header } from './Header';

export const MovieWrapper = (props) => {    
    const query='Jack+Reacher';
    const url=process.env.REACT_APP_BASEURLAPI+`search/movie?query=${query}&api_key=${process.env.REACT_APP_APIKEY}`;
    useFetch(url);
    const {movieData}=useContext(MovieContext);
    const {poster_path}=movieData;

const styleWrapper={
    backgroundImage:`url('${poster_path}')`
}

return (
    <div style={styleWrapper} className="full-background">
        <div className='movie-card-container'>
            <Header/>
            <CardMovie/>
            <Footer/>
        </div>
    </div>
  )
}

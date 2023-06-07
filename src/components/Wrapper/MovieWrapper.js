import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../../context/MovieContext';
import { data, getDefaultUrl } from '../../data/defaultData';
import { useFetch } from '../hooks/useFetch';
import { CardMovie } from './CardMovie';
import { Footer } from './Footer';
import { Header } from './Header';

export const MovieWrapper = () => {    
    const query=data.defaultMovie;
    const url=getDefaultUrl(query);
    const {fetchData}=useFetch(url);

    useEffect(() => {
        fetchData();
    }, [fetchData])
    
   
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

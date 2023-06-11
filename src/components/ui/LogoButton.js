import React, { useCallback } from 'react'
import logo from '../../assets/images/tmdb.svg';
import { data, getDefaultUrl } from '../../data/defaultData';
import { useFetch } from '../hooks/useFetch';
export const LogoButton = () => {
  
  const queryUrl=getDefaultUrl(data.defaultMovieId);
  return (
    <a  href='/'
    >
      <img 
        src={logo} 
        className='logo'/>
    </a>
  )
}

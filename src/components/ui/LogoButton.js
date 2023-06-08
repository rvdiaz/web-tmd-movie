import React, { useCallback } from 'react'
import logo from '../../assets/images/tmdb.svg';
import { data, getDefaultUrl } from '../../data/defaultData';
import { useFetch } from '../hooks/useFetch';
export const LogoButton = () => {
  
  const queryUrl=getDefaultUrl(data.defaultMovieId);

  const {fetchData}=useFetch(queryUrl);

  const handleReset=useCallback(()=>{
      fetchData();
  },[fetchData])

  return (
    <a
      onClick={handleReset}
    >
      <img 
        src={logo} 
        className='logo'/>
    </a>
  )
}

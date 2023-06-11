import React, { useEffect, useState } from 'react'
import { AsyncTypeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';
import { getDefaultUrl, getSearchUrl } from '../../data/defaultData';
import { useFetch } from '../hooks/useFetch';

export const InputSearch = () => {

  const [inputValue, setinputValue] = useState({
    currentId: '',
    options: [],
  });
  const {fetchData}=useFetch();  

  useEffect(() => {
    if(inputValue.currentId!==''){
      const url=getDefaultUrl(inputValue.currentId);
      fetchData(url);
    }
  }, [inputValue.currentId])

  return (
    <AsyncTypeahead
      className='inputSearch'
      onChange={(selected) => {
        if(selected.length>0)
       setinputValue({
        ...inputValue,
        currentId:selected[0].id
       })
      }}
      id='inputSearchTypeahead'
      isLoading={inputValue.isLoading}
      placeholder='Search Movie Title'
      labelKey='original_title'
      onSearch={(query) => {
      if(query.length>1){
        const url=getSearchUrl(query);
      fetch(url)
        .then(resp => resp.json())
        .then(json =>{
          setinputValue({
            ...inputValue,
            options:json.results
          });
        });
      }
      }}
      options={inputValue.options}
      renderMenu={(results) => {
      return (
      results.length>0 &&
      <Menu
        id='menuSearchResults'
        className='menuSearchResults'
      >
      {results.slice(0,5).map((result, index) => {
        return (
        <MenuItem 
          className='menuSearchItem'
          key={index} 
          option={result} 
          position={index}
          >
            {result.original_title}
        </MenuItem>
      )})}
      </Menu>
      
      )
      }}
/>
  )
}

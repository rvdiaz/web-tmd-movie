import React, { useState } from 'react'
import { AsyncTypeahead, Highlighter, Hint, Menu, MenuItem, Typeahead } from 'react-bootstrap-typeahead';

export const InputSearch = () => {
  const [inputValue, setinputValue] = useState({
    isLoading: false,
    options: [],
  });

  return (
    <AsyncTypeahead
      className='inputSearch'
      onChange={(selected) => {
       console.log(selected);
      }}
      id='sd'
      isLoading={inputValue.isLoading}
      labelKey='original_title'
      onSearch={(query) => {
      if(query.length>1){
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=9fa90834fc93e54ca2ddb3ec3b7b6630`)
        .then(resp => resp.json())
        .then(json =>{
          setinputValue({
            isLoading: false,
            options:json.results
          });
        });
      }
      }}
    options={inputValue.options}
    renderMenu={(results, menuProps) => {
      console.log(menuProps);
      return (
      <Menu
        id='menuSearchResults'
      >
      {results.map((result, index) => {
        return (
        <MenuItem 
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

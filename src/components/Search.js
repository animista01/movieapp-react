import React from 'react';

const Search = (props) => {
  return(
    <input type="text" placeholder="Search" onChange={props.onSearch} />
  )
}

export default Search;

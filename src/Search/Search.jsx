import React from 'react';
import { FaSearch } from 'react-icons/fa';
import "../Search/Search.css"

const SearchInput = () => {
  return (
    <div className="search-container">
      <input type="search"   id='inp_search'/>
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchInput;
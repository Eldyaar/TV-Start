import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import { FaSearch } from 'react-icons/fa';
import "../Search/Search.css"

const SearchInput = ({ getInputValue }) => {
  const [searchData, setSearchData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const matchList = async () => {
      try {
        const response = await axios.get('https://tv-start.onrender.com/match/');
        setSearchData(response.data.results);     
      } catch (e) {
        console.error("error: ", e)
      }
    }

    matchList()
  }, [])
  
  let searchInputValue
  const handleInputChange = (event) => {
    searchInputValue = event.target.value
  }

  const handleClickShowMore = () => {
    navigate('/searchresult')
  }

  const filterData = () => {
    return searchData
      .filter(item => item.sport_type.name_ru.toLowerCase() === searchInputValue.toLowerCase())
      .map(item => ({
        id: item.id,
        first_name: item.team_first.name_ru,
        second_name: item.team_second.name_ru,
        sport_type_img: item.sport_type.image,
        date_of_match: item.date_of_match,
        match_name: item.tournament_match.name_ru
      }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleClickShowMore()
    getInputValue(filterData())
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleClickShowMore()
      getInputValue(filterData())
    }
  }
 

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="search-container">
      <div className='search-form'>
        <input
          type="text"
          placeholder='поиск'
          class="search-input"
          onChange={handleInputChange}
        />
        <button type="submit" class="search-button">
          <FaSearch  className="search-icon" />
        </button> 
      </div>
    </form>
  );
};

export default SearchInput;
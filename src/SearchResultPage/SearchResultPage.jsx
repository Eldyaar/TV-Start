import React, { useContext } from 'react'

import '../LatestBroadcasts/HomeLatestBroadcast/homeLatestBroadcast.css'
import SearchResCard from '../SearchResPageCard/SearchResPageCard'

const SearchResultPage = ({ searchResData }) => {

   return (
      <div className='content'>
         <div className='latest-broadcast-section'>
            <h2 className='latest-broadcast-title'>Результаты поиска</h2>
            <div className='search-res-page-wrapper'>
               
               {searchResData && searchResData.map((item) => {
                     return <SearchResCard results={item} /> 
               })}
            </div>
         </div>
      </div>
   )
}

export default SearchResultPage
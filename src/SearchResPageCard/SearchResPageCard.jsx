import React from "react"
import '../Search/Search.css'
import { FaRegCirclePlay } from "react-icons/fa6";

const SearchResCard = ({ results }) => {
   return (
      <div key={results.id} className='latest-broadcast'>
         <div className='latest-broadcast-top'>
            <div className='latest-broadcast-top__title'>
               <a href='#'>
                  {results.first_name} - {results.second_name}
               </a>
            </div>
         </div>
         <div className='latest-broadcast-bottom'>
            <div className='latest-broadcast-bottom__logo'>
               <img src={results.sport_type_img} width="30"/>
            </div>
            <div className='latest-broadcast-bottom__desc'>
               <p className='latest-broadcast-bottom__desc_date'>{results.date_of_match}</p>
               <p className='latest-broadcast-bottom__desc_tournament'>{results.match_name}</p>
            </div>
            <a className='latest-broadcast-bottom__play'>
               <FaRegCirclePlay className='latest-broadcast-bottom__play_img'/>
            </a>  
         </div>
      </div>
   )
}

export default SearchResCard
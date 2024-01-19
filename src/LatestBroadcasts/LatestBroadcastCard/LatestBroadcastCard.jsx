import React from 'react'

import '../LatestBroadcastCard/latestBroadcastCard.css'
import { FaRegCirclePlay } from "react-icons/fa6";

const LatestBroadcast = ({ results }) => {
   return (
      <div key={results.id} className='latest-broadcast'>
         <div className='latest-broadcast-top'>
            <div className='latest-broadcast-top__title'>
               <a href='#'>
                  {results.team_first.name_ru} - {results.team_second.name_ru}
               </a>
            </div>
         </div>
         <div className='latest-broadcast-bottom'>
            <div className='latest-broadcast-bottom__logo'>
               <img src={results.sport_type.image} width="30"/>
            </div>
            <div className='latest-broadcast-bottom__desc'>
               <p className='latest-broadcast-bottom__desc_date'>{results.date_of_match}</p>
               <p className='latest-broadcast-bottom__desc_tournament'>{results.tournament_match.name_ru}</p>
            </div>
            <a className='latest-broadcast-bottom__play'>
               <FaRegCirclePlay className='latest-broadcast-bottom__play_img'/>
            </a>  
         </div>
      </div>
   )
}

export default LatestBroadcast
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './homeLatestBroadcast.css'
import LatestBroadcast from '../LatestBroadcastCard/LatestBroadcastCard'

const HomeLatestBroadcast = () => {
   const [latestData, setLatestData] = useState([])
   const navigate = useNavigate()

   useEffect(() => {
      const matchList = async () => {
         try {
            const response = await axios.get('https://tv-start.onrender.com/match/');
            setLatestData(response.data.results);     
         } catch (e) {
            console.error("error: ", e)
         }
      }

      matchList()
   }, [])

   const filterMatches = () => {
      return latestData.slice(0, 6);
   }

   const handleClickShowMore = () => {
      navigate('/latestbroadcast')
   }  

   return (
      <div className='content'>
         <div className='latest-broadcast-section'>
            <h2 className='latest-broadcast-title'>Последние трансляции</h2>
            <div className='latest-broadcast-wrapper'>
               {filterMatches().map((matchData) => {
                  return <LatestBroadcast results={matchData} /> 
               })}
            </div>
            <button 
               className='latest-broadcast-show-more' 
               onClick={(e) => {
                  e.preventDefault()
                  handleClickShowMore();
               }}
            >
               Смотреть больше
            </button>   
         </div>
      </div>
   )
}

export default HomeLatestBroadcast
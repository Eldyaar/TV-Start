import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LatestBroadcast from '../LatestBroadcastCard/LatestBroadcastCard'

import '../HomeLatestBroadcast/homeLatestBroadcast.css'

const LatestBroadcastPage = () => {
   const [matchesData, setMatchesData] = useState([])

   useEffect(() => {
      const matchList = async () => {
         try {
            const response = await axios.get('https://tv-start.onrender.com/match/');
            setMatchesData(response.data.results);  
         } catch (e) {
            console.error("error: ", e)
         }
      }

      matchList()
   }, [])

   return (
      <div className='content'>
         <div className='latest-broadcast-section'>
            <h2 className='latest-broadcast-title'>Последние трансляции</h2>
            <div className='latest-broadcast-page-wrapper'>
               {matchesData.map((matchesData) => {
                  return <LatestBroadcast results={matchesData} />
               })}
            </div>
         </div>
      </div>
   )
}

export default LatestBroadcastPage
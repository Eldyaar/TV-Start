import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Ava from './pleer.jpg';
import '../Calendar/Calendar.css'


const Broadcast =() => {
  const [latestData, setLatestData] = useState([])

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


  return (
    <div className='content'>
      <div className='broadcast-wrap'>
        <h2 className='broadcast-title'>Прямые трансляции</h2>
        <div className='broadcast-content'>
          {filterMatches().map((match) => (
            <div key={match.id} className="ava">
              <div className="body">
                <div className="logo-flex">
                  <div className="div">
                    <img className="game" src={match.sport_type.image} alt={match.sport_type.name_ru}/>
                  </div>
                  <p>{match.date_of_match ? `${match.date_of_match} MSK` : '2024-01-15 10:32:17 MSK'}</p>
                </div>
                <div>
                  <div className="logo-flex">
                    <div className="row-flex">
                      <p className="name">{match.team_first.name_ru}</p>
                      <img className="logo" src={match.team_first.image} alt={match.team_first.name_ru}/>
                    </div>
                    <p className="margin">- -</p>
                    <div className="row-flex">
                      <img className="logo" src={match.team_second.image}
                            alt={match.team_second.name_ru}/>
                      <p className="name">{match.team_second.name_ru}</p>
                    </div>
                  </div>
                  <p className="name_ru">{match.tournament_match.name_ru}</p>
                </div>
                <div className="button">
                  <a href={match.url} target="_blank">
                    <img src={Ava} width="30" height="30"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Broadcast
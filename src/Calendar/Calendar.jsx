import React, { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import axios from 'axios';
import Ava from './pleer.jpg';
import './Calendar.css';

const Calendar = () => {
  const [matchesData, setMatchesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://tv-start.onrender.com/match/');
        setMatchesData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
      <>
        <div className="div-content">
          <div className="spaces">
            <select name="" id="" className="select">
              <option value="" className="option">Все виды спорта</option>
              <option value="" className="option">Футбол</option>
              <option value="" className="option">Баскетбол</option>
            </select>

            <select name="" id="" className="select">
              <option value="" className="option">Все соревнования</option>
              <option value="" className="option">Чемпионат Кыргызстана</option>
              <option value="" className="option">Чемпионат Мира</option>
            </select>

            <select name="" id="" className="select">
              <option value="" className="option">Все годы</option>
              <option value="" className="option">2016</option>
              <option value="" className="option">2017</option>
              <option value="" className="option">2018</option>
              <option value="" className="option">2019</option>
              <option value="" className="option">2020</option>
              <option value="" className="option">2021</option>
              <option value="" className="option">2022</option>
              <option value="" className="option">2023</option>
              <option value="" className="option">2024</option>
            </select>

            <select name="" id="" className="select">
              <option value="" className="option">Все месяцы</option>
              <option value="" className="option">Январь</option>
              <option value="" className="option">Февраль</option>
              <option value="" className="option">Март</option>
              <option value="" className="option">Апрель</option>
              <option value="" className="option">Май</option>
              <option value="" className="option">Июнь</option>
              <option value="" className="option">Июль</option>
              <option value="" className="option">Август</option>
              <option value="" className="option">Сентябрь</option>
              <option value="" className="option">Октябрь</option>
              <option value="" className="option">Ноябрь</option>
              <option value="" className="option">Декабрь</option>
            </select>
          </div>
        </div>

        <div className="content">

          <h3>Календарь</h3>
          {loading ? (
              <div className="loader">
                <ScaleLoader color="#36d7b7" />
              </div>
          ) : (
              matchesData.map((match) => (
                  <div key={match.id} className="ava">
                    <div className="body">
                      <div className="logo-flex">
                        <div className="div">
                          <img className="game" src={match.sport_type.image} alt={match.sport_type.name_ru}/>
                        </div>
                        <p>{match.date_of_match} MSK</p>
                      </div>
                      <div>
                        <div className="logo-flex">
                          <p className="name">{match.team_first.name_ru}</p>
                          <img className="logo" src={match.team_first.image} alt={match.team_first.name_ru}/>
                          <p className="margin">- -</p>
                          <img className="logo" src={match.team_second.image} alt={match.team_second.name_ru}/>
                          <p> {match.team_second.name_ru}</p>
                        </div>
                        <p className="name_ru">{match.tournament_match.name_ru}</p>
                      </div>
                      <div className="button">
                        <a href="/ru/streams/basketbol-liga-chempionov-hapoel-holon-ostende-2/" target="_blank">
                          <img src={Ava} width="30" height="30"/>
                        </a>
                      </div>
                    </div>
                    {/*<p>Tournament: {match.tournament_match.name_ru}</p>*/}
                    {/*<p>Sport type: {match.sport_type.name_ru}</p>*/}
                    {/*<p>Gender type: {match.gender_type.name_ru}</p>*/}
                  </div>
              ))
          )}
        </div>
      </>
  );
};

export default Calendar;

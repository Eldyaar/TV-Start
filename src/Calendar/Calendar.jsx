import React, { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import axios from 'axios';
import Ava from './pleer.jpg';
import './Calendar.css';

const Calendar = () => {
  const [matchesData,  setMatchesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedCompetition, setSelectedCompetition] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

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

  const filterMatches = () => {
    let filteredMatches = matchesData;

    if (selectedSport) {
      filteredMatches = filteredMatches.filter(match => match.sport_type.name_ru === selectedSport);
    }

    if (selectedCompetition) {
      filteredMatches = filteredMatches.filter(match => match.tournament_match.name_ru === selectedCompetition);
    }

    if (selectedYear) {
      filteredMatches = filteredMatches.filter(match => match.date_of_match.includes(selectedYear));
    }

    if (selectedMonth) {
      filteredMatches = filteredMatches.filter(match => {
        const matchDate = new Date(match.date_of_match);
        return matchDate.getMonth() + 1 === parseInt(selectedMonth, 10);
      });
    }

    return filteredMatches;
  };


  const handleSportChange = (event) => {
    const selectedSport = event.target.value;
    setSelectedSport(selectedSport);
    setSelectedCompetition('');
  };

  const handleCompetitionChange = (event) => {
    const selectedCompetition = event.target.value;
    setSelectedCompetition(selectedCompetition);
  };

  const handleSelectedYear = (event) => {
    const selectedCompetitionYear = event.target.value;
    setSelectedYear(selectedCompetitionYear);
  };

  const handleSelectedMonth = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
  };

  return (
      <>
        <div className="div-content">
          <div className="spaces">
            <select name="" id="" className="select" onChange={handleSportChange}>
              <option value="" className="option">Все виды спорта</option>
              <option value="Футбол" className="option">Футбол</option>
              <option value="Баскетбол" className="option">Баскетбол</option>
            </select>

            <select name="" id="" className="select" onChange={handleCompetitionChange}>
              <option value="" className="option">Все соревнования</option>
              <option value="Футбол. Кубок Азии" className="option">Футбол. Кубок Азии</option>
              <option value="Футбол. Чемпионат Португалии." className="option">Футбол. Чемпионат Португалии.</option>
              <option value="Футбол. Кубок Франции" className="option">Футбол. Кубок Франции</option>
              <option value="Баскетбол. Лига Чемпионов" className="option">Баскетбол. Лига Чемпионов</option>
              <option value="Баскетбол. Чемпионат Испании." className="option">Баскетбол. Чемпионат Испании.</option>
              <option value="Баскетбол. Чемпионат Испании." className="option">Баскетбол. Чемпионат Испании.</option>
            </select>

            <select name="" id="" className="select" onChange={handleSelectedYear}>
              <option value="" className="option">Все годы</option>
              <option value="2016" className="option">2016</option>
              <option value="2017" className="option">2017</option>
              <option value="2018" className="option">2018</option>
              <option value="2019" className="option">2019</option>
              <option value="2020" className="option">2020</option>
              <option value="2021" className="option">2021</option>
              <option value="2022" className="option">2022</option>
              <option value="2023" className="option">2023</option>
              <option value="" className="option">2024</option>
            </select>

            <select name="" id="" className="select" onChange={handleSelectedMonth}>
              <option value="" className="option">Все месяцы</option>
              <option value="1" className="option">Январь</option>
              <option value="2" className="option">Февраль</option>
              <option value="3" className="option">Март</option>
              <option value="4" className="option">Апрель</option>
              <option value="5" className="option">Май</option>
              <option value="6" className="option">Июнь</option>
              <option value="7" className="option">Июль</option>
              <option value="8" className="option">Август</option>
              <option value="9" className="option">Сентябрь</option>
              <option value="10" className="option">Октябрь</option>
              <option value="11" className="option">Ноябрь</option>
              <option value="12" className="option">Декабрь</option>
            </select>
          </div>
        </div>

        <div className="content">
          <h3>Календарь</h3>
          <div className="content-flex">
            {loading ? (
                <div className="loader">
                  <ScaleLoader color="#36d7b7"/>
                </div>
            ) : (
                filterMatches().map((match) => (
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
                              <img className="logo" src={match.team_second.image} alt={match.team_second.name_ru}/>
                              <p className="name">{match.team_second.name_ru}</p>
                            </div>
                          </div>
                          <p className="name_ru">{match.tournament_match.name_ru}</p>
                        </div>
                        <div className="button">
                          <a href="https://tvstart.ru/ru/streams/futbol-kubok-azii-afk-tajland-kyrgyzstan/"
                             target="_blank">
                            <img src={Ava} width="30" height="30"/>
                          </a>
                        </div>
                      </div>
                    </div>
                ))
            )}
          </div>
        </div>
      </>
  );
};

export default Calendar;

import React, { useEffect, useState } from 'react';
import './Programm.css';
import IconBfb from "../IconBfb/IconBfb";

const Programm = () => {
    const [sportTypes, setSportTypes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tv-start.onrender.com/sport_type/');

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setSportTypes(data.results);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, []);

    const displaySportTypes = () => (
        <div>
            {sportTypes.map((sportType, index) => (
                <div key={index}>
                    <h3>{sportType.name_ru}</h3>
                    <p>{sportType.created_date} MSK</p>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <div className="content">
                <div className="col-md-7">
                    <a href="https://tv.yandex.ru/channel/start-triumf-1476" target="_blank">
                        <h3>Программа Телеканала «СТАРТ Триумф»</h3>
                    </a>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Программа Телеканала «СТАРТ»</h3>
                    </div>
                    <div className="col-md-6 table-schedule__nav">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="table-schedule__nav__1">СЕГОДНЯ</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="table-schedule__nav__2 table-schedule__nav__link">ЗАВТРА</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="table-schedule__nav__3 table-schedule__nav__link">СР</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="table-schedule__nav__4 table-schedule__nav__link">ЧТ</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="table-schedule__nav__5 table-schedule__nav__link">ПТ</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="table-schedule__nav__6 table-schedule__nav__link">СБ</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="table-schedule__nav__7 table-schedule__nav__link">ВС</span>
                    </div>
                </div>
                {displaySportTypes()}
            </div>
        </div>
    );
};

export default Programm;

import React from 'react';
import televd from "./video.png"
import './Buttons.css';

const Buttons = () => {
    return (
        <div className="content">
            <div className="tele_true">
                <div className="video_link">
                    <img src={televd} alt="" id='tele_img'/>
                </div>
                <div className="tele_text">
                    <a className="tele-lain" href="http://localhost:3000/broadcasting">
                        <p id='h3'>Смотреть онлайн</p>
                        <p id='h1'>Телеканал «Старт Триумф»</p>
                    </a>
                </div>
            </div>

            <div className="tele_true">
                <div className="video_link">
                    <img src={televd} alt="" id='tele_img'/>
                </div>
                <div className="tele_text">
                    <a className="tele-lain" href="http://localhost:3000/broadcasting">
                        <p id='h3'>Смотреть онлайн</p>
                        <p id='h1'>Телеканал «Старт»</p>
                    </a>
                    <p id='p1'>
                        <span>07:50   <span className="padding-lift"> Волейбол. PARI Суперлига 23/24. Мужчины. Енисей Красноярск — Локомотив Новосибирск</span></span>
                        <br/>
                        <span>09:50    <span className="padding-lift">Баскетбол. Лига чемпионов 23/24. ПАОК (Греция) — Тофаш Бурса (Турция)</span> </span>
                        <br/>
                        <span>12:00    <span className="padding-lift">Баскетбол. Единая Лига ВТБ 23/24. Енисей — МБА</span></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Buttons;
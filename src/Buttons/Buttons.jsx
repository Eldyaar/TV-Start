import React from 'react';
import televd from "./video.png"
import './Buttons.css';
import {useLanguage} from "../LanguageContext/LanguageContext";

const Buttons = () => {
    const { selectedLanguage } = useLanguage();

    return (
        <>

            <amp-ad width="100vw" height="320"
                    type="adsense"
                    data-ad-client="ca-pub-8334463459257892"
                    data-ad-slot="2588410361"
                    data-auto-format="rspv"
                    data-full-width="">
                <div overflow=""></div>
            </amp-ad>

            {selectedLanguage === "RU" &&
                <div className="color">
                    <img className="iamges-bg" src="http://tvstart.ru//app/uploads/system/bg-top-23_2.jpg"/>
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
                                    <span>12:00    <span
                                        className="padding-lift">Баскетбол. Единая Лига ВТБ 23/24. Енисей — МБА</span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {selectedLanguage === "EN" &&
                <div className="color">
                    <img className="iamges-bg" src="http://tvstart.ru//app/uploads/system/bg-top-23_2.jpg"
                         alt="Background"/>
                    <div className="content">
                        <div className="tele_true">
                            <div className="video_link">
                                <img src={televd} alt="Television" id='tele_img'/>
                            </div>
                            <div className="tele_text">
                                <a className="tele-lain" href="http://localhost:3000/broadcasting">
                                    <p id='h3'>Watch Online</p>
                                    <p id='h1'>TV Channel "Start Triumph"</p>
                                </a>
                            </div>
                        </div>

                        <div className="tele_true">
                            <div className="video_link">
                                <img src={televd} alt="Television" id='tele_img'/>
                            </div>
                            <div className="tele_text">
                                <a className="tele-lain" href="http://localhost:3000/broadcasting">
                                    <p id='h3'>Watch Online</p>
                                    <p id='h1'>TV Channel "Start"</p>
                                </a>
                                <p id='p1'>
                                    <span>07:50 <span className="padding-lift"> Volleyball. PARI Superleague 23/24. Men. Yenisei Krasnoyarsk — Lokomotiv Novosibirsk</span></span>
                                    <br/>
                                    <span>09:50 <span className="padding-lift">Basketball. Champions League 23/24. PAOK (Greece) — Tofas Bursa (Turkey)</span></span>
                                    <br/>
                                    <span>12:00 <span className="padding-lift">Basketball. VTB United League 23/24. Yenisei — MBA</span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    );
};

export default Buttons;
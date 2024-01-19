import React from 'react'
import { Link } from 'react-router-dom'
import log from "../Nav/logo-mainn-ru.png"
import "./Ft.css"
import {useLanguage} from "../LanguageContext/LanguageContext";
import star from "../Contact/build.png";


const Footer = () => {
    const { selectedLanguage } = useLanguage();

    return (
        <div className='container1'>

            {selectedLanguage === "RU" &&
                <div className="content1">
                    <div className='nav'>

                        <div className="nav_bar">
                            <div className="logo_block">
                                <Link to={'/'}>
                                    <img src={log} alt="" className='logo-main'/>
                                </Link>
                            </div>
                            <div className="nav_link">
                                <Link to={'/programm'} id="linkss">
                                    Программа
                                </Link>
                                <Link to={'/broadcast'} id="linkss">
                                    Прямые трансляции
                                </Link>
                                <Link to='/calendar' id="linkss">
                                    Календарь
                                </Link>
                                <Link to='/service' id="linkss">
                                    Услуги
                                </Link>
                                <Link to='/broadcasting' id="linkss">
                                    Вещание
                                </Link>
                                <Link to='/cable' id="linkss">
                                    Кабельным <br/> операторам
                                </Link>
                                <Link to='/contact' id="linkss">
                                    Контакты
                                </Link>

                            </div>
                            <div className="info">
                                <h4 className="aa">+7 499 700 02 02</h4>
                                <a className="email" href="mailto:info@tvstart.ru">info@tvstart.ru</a>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="food">
                        <p>© Телерадиокомпания «СТАРТ» 2024</p>
                        <p>Все права защищены</p>
                    </div>
                </div>
            }

            {selectedLanguage === "EN" &&
                <div className="content1">
                    <div className='nav'>
                        <div className="nav_bar">
                            <div className="logo_block">
                                <Link to={'/'}>
                                    <img src={log} alt="" className='logo-main'/>
                                </Link>
                            </div>
                            <div className="nav_link">
                                <Link to={'/programm'} id="linkss">
                                    SCHEDULE
                                </Link>
                                <Link to={'/broadcast'} id="linkss">
                                    LIVE
                                </Link>
                                <Link to='/calendar' id="linkss">
                                    CALENDAR
                                </Link>
                                <Link to='/service' id="linkss">
                                    SERVICES
                                </Link>
                                <Link to='/contact' id="linkss">
                                    CONTACTS
                                </Link>
                            </div>
                            <div className="info">
                                <h4 className="aa">+7 499 700 02 02</h4>
                                <a className="email" href="mailto:info@tvstart.ru">info@tvstart.ru</a>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="footer">
                        <p>© Channel START 2024</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default Footer;
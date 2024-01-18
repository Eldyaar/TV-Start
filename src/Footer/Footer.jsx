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
                                    Program
                                </Link>
                                <Link to={'/broadcast'} id="linkss">
                                    Live Broadcasts
                                </Link>
                                <Link to='/calendar' id="linkss">
                                    Calendar
                                </Link>
                                <Link to='/service' id="linkss">
                                    Services
                                </Link>
                                <Link to='/broadcasting' id="linkss">
                                    Broadcasting
                                </Link>
                                <Link to='/cable' id="linkss">
                                    Cable Operators
                                </Link>
                                <Link to='/contact' id="linkss">
                                    Contacts
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
                        <p>© TeleRadioCompany "START" 2024</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default Footer;
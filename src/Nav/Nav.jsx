import React from 'react'
import "./Nav.css"
import logo from "./logo-mainn-ru.png"
import imgvk from "./icon/i-soc-vk.png"
import imgr from "./icon/i-soc-rtu.png"
import imgzen from "./icon/i-soc-zen.png"
import imgod from "./icon/i-soc-ok.png"
import imgtg from "./icon/i-soc-tg.png"
import imgyt from "./icon/i-soc-yt.png"
import imgtt from "./icon/i-soc-tt.png"
import SearchInput from '../Search/Search'
import { Link } from 'react-router-dom'
import televd from "./icon/video.png"

const Nav = ({ getInputValue }) => {

    return (
        <div className="container">
            <div className="content">
                <div className='nav'>

                    <div className="nav_bar">
                        <div className="logo_block">
                            <Link to={'/'}>
                                <img src={logo} alt="" className='logo-main' />
                            </Link>
                        </div>
                        <div className="nav_link">
                            <Link to={'/programm'} id="links">
                                Программа
                            </Link>
                            <Link to={'/broadcast'}  id="links">
                                Прямые трансляции
                            </Link>
                            <Link to='/calendar'  id="links">
                                Календарь
                            </Link>
                            <Link to='/service'  id="links">
                                Услуги
                            </Link>
                            <Link to='/broadcasting'  id="links">
                                Вещание
                            </Link>
                            <Link to='/cable'  id="links">
                                Кабельным <br /> операторам
                            </Link>
                            <Link to='/contact'  id="links">
                                Контакты
                            </Link>
                        </div>
                        <div className="lang">
                            <select id="mySelect"  >
                                <option value="option1">RU</option>
                                <option value="option1">EN</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/*  */}


                <div className="nav_icon">
                    <div className="icon">
                        <a href="https://vk.com/tvstartru" target="_blank"><img className='img_icon' src={imgvk} alt=""/></a>

                        <a href="https://rutube.ru/u/tvstart/" target="_blank">
                            <div><img className='img_icon' src={imgr} alt=""/></div>
                        </a>

                        <a href="https://dzen.ru/tvstart" target="_blank">
                            <div><img className='img_icon' src={imgzen} alt=""/></div>
                        </a>

                        <a href="https://ok.ru/tvstart" target="_blank">
                            <div><img className='img_icon' src={imgod} alt=""/></div>
                        </a>

                        <a href="https://t.me/TVSTART" target="_blank">
                            <div><img className='img_icon' src={imgtg} alt=""/></div>
                        </a>

                        <a href="https://www.youtube.com/c/TVSTARTLIVE" target="_blank">
                            <div><img className='img_icon' src={imgyt} alt=""/></div>
                        </a>

                        <a href="https://www.tiktok.com/@tvstartru" target="_blank">
                            <div><img className='img_icon' src={imgtt} alt=""/></div>
                        </a>
                    </div>
                    <div className='search'>
                        <div className='search_bl'>
                            {/* <input id='inp_search' type="search" /> */}
                            <SearchInput getInputValue={getInputValue} />
                        </div>
                    </div>
                </div>


                {/*  */}


                <div className="tele_true">
                    <div className="video_link">
                        <img src={televd} alt="" id='tele_img'/>
                    </div>
                    <div className="tele_text">
                        <p id='h3'>Смотреть онлайн</p>
                        <p id='h1'>Телеканал «Старт Триумф»</p>
                    </div>
                </div>

                <div className="tele_true">
                    <div className="video_link">
                        <img src={televd} alt="" id='tele_img'/>
                    </div>
                    <div className="tele_text">
                        <p id='h3'>Смотреть онлайн</p>
                        <p id='h1'>Телеканал «Старт»</p>
                        <p id='p1'> <span>07:50    Волейбол. PARI Суперлига 23/24. Мужчины. Енисей Красноярск — Локомотив Новосибирск </span>
                            <span>09:50    Баскетбол. Лига чемпионов 23/24. ПАОК (Греция) — Тофаш Бурса (Турция) </span>
                            <span>12:00    Баскетбол. Единая Лига ВТБ 23/24. Енисей — МБА</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Nav;
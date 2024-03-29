import React from 'react';
import './Nav.css';
import logo from './logo-mainn-ru.png';
import imgvk from './icon/i-soc-vk.png';
import imgr from './icon/i-soc-rtu.png';
import imgzen from './icon/i-soc-zen.png';
import imgod from './icon/i-soc-ok.png';
import imgtg from './icon/i-soc-tg.png';
import imgyt from './icon/i-soc-yt.png';
import imgtt from './icon/i-soc-tt.png';
import SearchInput from '../Search/Search';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../LanguageContext/LanguageContext';
import { useLocation } from 'react-router-dom';

import dataForNav from './dataForNavMainPage';

const Nav = ({ getInputValue }) => {
    const { selectedLanguage, handleLanguageChange } = useLanguage();
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    
    return (
        <>
            {isHomePage ? (
            <div className="navigation">
                <div className="content">
                    {selectedLanguage === "RU" &&
                        <div>
                            <div className='nav'>
                                <div className="nav_bar">
                                    <div className="logo_block">
                                        <Link to={'/'}>
                                            <img src={logo} alt="" className='logo-main'/>
                                        </Link>
                                    </div>
                                    <div className="nav_link">
                                        <Link to={'/programm'} id="links">Программа</Link>
                                        <Link to={'/broadcast'} id="links">Прямые трансляции</Link>
                                        <Link to='/calendar' id="links">Календарь</Link>
                                        <Link to='/service' id="links">Услуги</Link>
                                        <Link to='/broadcasting' id="links">Вещание</Link>
                                        <Link to='/cable' id="links">Кабельным <br/> операторам</Link>
                                        <Link to='/contact' id="links">Контакты</Link>
                                    </div>
                                    <div className="lang">
                                        <select onChange={(e) => handleLanguageChange(e.target.value)} value={selectedLanguage}>
                                            <option value="RU">RU</option>
                                            <option value="EN">EN</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="nav_icon">
                                <div className="icon">
                                    <a href="https://vk.com/tvstartru" target="_blank">
                                        <img className='img_icon' src={imgvk} alt="" />
                                    </a>

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
                                        <SearchInput getInputValue={getInputValue}/>
                                    </div>
                                </div>
                            </div>
                            <div className='nav-for-home-page'>
                                {dataForNav.map((dataNav) => {
                                    return <WatchLinkForMainPage data={dataNav} />
                                })}
                            </div>
                        </div>
                    }

                    {selectedLanguage === "EN" &&
                        <div>
                            <div className='nav'>
                                <div className="nav_bar">
                                    <div className="logo_block">
                                        <Link to={'/'}>
                                            <img src={logo} alt="" className='logo-main'/>
                                        </Link>
                                    </div>
                                    <div className="nav_link">
                                        <Link to={'/programm'} id="links">
                                            Schedule
                                        </Link>
                                        <Link to={'/broadcast'} id="links">
                                            Live Events
                                        </Link>
                                        <Link to='/calendar' id="links">
                                            Calendar
                                        </Link>
                                        <Link to='/service' id="links">
                                            Services
                                        </Link>
                                        <Link to='/contact' id="links">
                                            Contacts
                                        </Link>
                                    </div>
                                    <div className="lang">
                                        <select onChange={(e) => handleLanguageChange(e.target.value)}
                                                value={selectedLanguage}>
                                            <option value="RU">RU</option>
                                            <option value="EN">EN</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="nav_icon">
                                <div className="icon">
                                    <a href="https://vk.com/tvstartru" target="_blank"><img className='img_icon' src={imgvk}
                                                                                            alt=""/></a>

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
                                        <SearchInput results={getInputValue} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        ) : (
            <div className="navigation">
                <div className="content">
                    {selectedLanguage === "RU" &&
                        <div>
                            <div className='nav'>
                                <div className="nav_bar">
                                    <div className="logo_block">
                                        <Link to={'/'}>
                                            <img src={logo} alt="" className='logo-main'/>
                                        </Link>
                                    </div>
                                    <div className="nav_link">
                                        <Link to={'/programm'} id="links">Программа</Link>
                                        <Link to={'/broadcast'} id="links">Прямые трансляции</Link>
                                        <Link to='/calendar' id="links">Календарь</Link>
                                        <Link to='/service' id="links">Услуги</Link>
                                        <Link to='/broadcasting' id="links">Вещание</Link>
                                        <Link to='/cable' id="links">Кабельным <br/> операторам</Link>
                                        <Link to='/contact' id="links">Контакты</Link>
                                    </div>
                                    <div className="lang">
                                        <select onChange={(e) => handleLanguageChange(e.target.value)} value={selectedLanguage}>
                                            <option value="RU">RU</option>
                                            <option value="EN">EN</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="nav_icon">
                                <div className="icon">
                                    <a href="https://vk.com/tvstartru" target="_blank">
                                        <img className='img_icon' src={imgvk} alt="" />
                                    </a>

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
                                        <SearchInput getInputValue={getInputValue}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {selectedLanguage === "EN" &&
                        <div>
                            <div className='nav'>
                                <div className="nav_bar">
                                    <div className="logo_block">
                                        <Link to={'/'}>
                                            <img src={logo} alt="" className='logo-main'/>
                                        </Link>
                                    </div>
                                    <div className="nav_link">
                                        <Link to={'/programm'} id="links">
                                            Schedule
                                        </Link>
                                        <Link to={'/broadcast'} id="links">
                                            Live Events
                                        </Link>
                                        <Link to='/calendar' id="links">
                                            Calendar
                                        </Link>
                                        <Link to='/service' id="links">
                                            Services
                                        </Link>
                                        <Link to='/contact' id="links">
                                            Contacts
                                        </Link>
                                    </div>
                                    <div className="lang">
                                        <select onChange={(e) => handleLanguageChange(e.target.value)}
                                                value={selectedLanguage}>
                                            <option value="RU">RU</option>
                                            <option value="EN">EN</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="nav_icon">
                                <div className="icon">
                                    <a href="https://vk.com/tvstartru" target="_blank"><img className='img_icon' src={imgvk}
                                                                                            alt=""/></a>

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
                                        <SearchInput results={getInputValue} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    }
                </div>
            </div>
        )
            }

        </>
    );
};

const WatchLinkForMainPage = ({ data }) => {
    return (
        <>
            {data && data.schedule && data.schedule.length > 0 ? (
                <div className='nav-for-home-page__item'>
                    <div className='nav-for-home-page__item-logo'>
                        <NavLink to='/broadcasting' target='_blank'>
                            <img src={data.logo} />
                        </NavLink>
                    </div>
                    <div className='nav-for-home-page__item-desc'>
                        <div className='nav-for-home-page__item-desc__watch'>{data.watch_type}</div>
                        <div className='nav-for-home-page__item-desc__title'>{data.title}</div>
                        <div className='nav-for-home-page__item-desc__schedule'>
                            {data.schedule.map((item) => <p>{item}</p>)}
                        </div>
                    </div>
                </div>
            ) : (
                <div className='nav-for-home-page__item'>   
                    <div className='nav-for-home-page__item-logo'>
                        <NavLink to='/broadcasting' target='_blank'>
                            <img src={data.logo} />
                        </NavLink>
                    </div>
                    <div className='nav-for-home-page__item-desc'>
                        <div className='nav-for-home-page__item-desc__watch'>{data.watch_type}</div>
                        <div className='nav-for-home-page__item-desc__title'>{data.title}</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Nav;

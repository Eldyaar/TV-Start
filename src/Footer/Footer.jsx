
import "./Ft.css"
import React from 'react'
import { Link } from 'react-router-dom'
import log from "../Nav/logo-mainn-ru.png"


const Footer = () => {
  return (
    <div className='container1'>
             <div className="content1">
             <div className='nav'>
              
              <div className="nav_bar">
              <div className="logo_block">
              <Link to={'/'}>
               <img src={log} alt="" className='logo' />
              </Link>
              </div>
              <div className="nav_link">
              <Link to={'/programm'} id="linkss">
                  Программа
                </Link>
                <Link to={'/broadcast'}  id="linkss">
                Прямые трансляции
                </Link>
                <Link to='/calendar'  id="linkss">
                Календарь
                </Link>
                <Link to='/service'  id="linkss">
                Услуги
                </Link>
                <Link to='/broadcasting'  id="linkss">
                Вещание
                </Link>
                <Link to='/cable'  id="linkss">
                Кабельным <br /> операторам
                </Link>
                <Link to='/contact'  id="linkss">
                Контакты
                </Link>
               
                </div>
                <div className="info">
                               <h4 className="aa">+7 499 700 02 02</h4>
                                 <p>info@tvstart.ru</p>
                </div> 
           </div>
      </div>
      <div className="line"></div>
             <div className="food"><p>© Телерадиокомпания «СТАРТ» 2024</p><p>Все права защищены</p></div>
             </div>
            
    </div>
  )
}



export default Footer;
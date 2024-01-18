import React from 'react'
import "../Contact/Contact.css"
import star from "./build.png"

const Contact = () => {
    return (
        <div className='content'>
            <div className='title'>
                <h1>Контакты</h1>
                <p>Телерадиокомпания «СТАРТ» 107023 Москва Электрозаводская 32а</p>
            </div>
            <div className='img_cart'>
                <img src={star} alt="" />
            </div>
            <div className='map'> <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab8ac139c220fcdb4b093662e20f6de413c5665f566e07731a6a4f85d185c9984&amp;source=constructor" width="900" height="500" frameborder="0"></iframe></div>
            <div className="infom">
                <h3>Телефоны: <br /> <span>+7 499 700 02 02 </span></h3>
                <h3>Сайт: <br /> <span>TVSTART.RU </span></h3>
                <h3>E-mail: <br /> <span>INFO@TVSTART.RU </span></h3>
            </div>
            <div className='infor'>
                <p>Общество с ограниченной ответственностью «Телерадиокомпания «Старт» ИНН 7722510229/КПП 771801001
                    ОГРН 1047796200671 Юридический адрес 107023, г. Москва, вн. тер. г. муниципальный округ Преображенское,
                    ул. Электрозаводская, д. 32А. <br/><a href="http://tvstart.ru//app/uploads/2022/05/user_agreements.pdf"> Пользовательское соглашение </a> </p></div>
        </div>
    )
}

export default Contact
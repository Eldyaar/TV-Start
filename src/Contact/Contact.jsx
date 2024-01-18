import React from 'react'
import {useLanguage} from "../LanguageContext/LanguageContext";
import "../Contact/Contact.css"
import star from "./build.png"

const Contact = () => {
    const { selectedLanguage } = useLanguage();

    return (
        <div className='content'>

            {selectedLanguage === "RU" &&
                <div>
                    <div className='title'>
                        <h1>Контакты</h1>
                        <p>Телерадиокомпания «СТАРТ» 107023 Москва Электрозаводская 32а</p>
                    </div>
                    <div className='img_cart'>
                        <img src={star} alt=""/>
                    </div>
                    <div className='map'>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab8ac139c220fcdb4b093662e20f6de413c5665f566e07731a6a4f85d185c9984&amp;source=constructor"
                            width="900" height="500" frameBorder="0"></iframe>
                    </div>
                    <div className="row-ooo">
                        <div className="col-md-4">
                            <h4>Телефоны:</h4>
                            <p>+7 499 700 02 02</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Сайт:</h4>
                            <p><a href="http://tvstart.ru">TVSTART.RU</a></p>
                        </div>
                        <div className="col-md-4">
                            <h4>E-mail:</h4>
                            <p><a href="mailto:info@tvstart.ru">INFO@TVSTART.RU</a></p>
                        </div>
                        <p>&nbsp;</p>
                    </div>
                    <div className='infor'>
                        <p>Общество с ограниченной ответственностью «Телерадиокомпания «Старт» ИНН 7722510229/КПП 771801001
                            ОГРН 1047796200671 Юридический адрес 107023, г. Москва, вн. тер. г. муниципальный округ
                            Преображенское,
                            ул. Электрозаводская, д. 32А. <br/><a
                                href="http://tvstart.ru//app/uploads/2022/05/user_agreements.pdf"> Пользовательское
                                соглашение </a></p></div>
                </div>
            }

            {selectedLanguage === "EN" &&
                <div>
                    <div className='title'>
                        <h1 className="playse">Contact Us</h1>
                        <h4 className="ops">Broadcasting company "START" 127254, Russia, Moscow, Ogorodnyj proezd, 4 building 1</h4>
                    </div>
                    <div className='map'>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A937c414162fe76e877f87fa2b0c34dd0c0b00ecaaa2e42f01db031324931501f&amp;source=constructor"
                            width="1140" height="500" frameBorder="0"></iframe>
                    </div>
                    <div className="row-ooo">
                        <div className="col-md-4">
                            <h4>Phones:</h4>
                            <p>+7 499 700 02 02</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Website:</h4>
                            <p><a href="http://tvstart.ru">TVSTART.RU</a></p>
                        </div>
                        <div className="col-md-4">
                            <h4>E-mail:</h4>
                            <p><a href="mailto:info@tvstart.ru">INFO@TVSTART.RU</a></p>
                        </div>
                        <p>&nbsp;</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default Contact
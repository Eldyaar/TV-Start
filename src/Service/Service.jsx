import React, {useState} from 'react';
import './Service.css';
import {useLanguage} from "../LanguageContext/LanguageContext";

const Service = () => {
    const { selectedLanguage } = useLanguage();

    return (
        <div className="content">
            {selectedLanguage === 'RU' &&
                <div className="block__block-post">
                    <h2>Услуги</h2>
                    <p>Наша компания имеет собственную техническую базу и готова предоставить полный спектр услуг
                        телевизионного производства. Мы можем предложить любые услуги вещания от аренды оборудования до
                        организации полного телевизионного производства и прямой трансляции любого мероприятия полностью
                        укомплектованным&nbsp;творческим коллективом.</p>
                    <p>Наш главный офис находится в Москве. Тем не менее, мы предоставляем наши услуги в любом регионе
                        России, Беларуси и Казахстана. Используя flypack-оборудование, наша компания сможет производить
                        любое мероприятие на разных континентах и в далеких странах.</p>
                    <p><img src="http://tvstart.ru/app/uploads/2017/03/services01-1.jpg" alt="" width="100%"/></p>
                    <p>&nbsp;</p>
                    <h4>TVSTART предоставляет следующие технические услуги:</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>HD OB Tracks</strong></p>
                            <ul>
                                <li>2&nbsp;switchers from 20&nbsp;to&nbsp;36&nbsp;channels;</li>
                                <li>up&nbsp;to&nbsp;16&nbsp;cameras;</li>
                                <li>LSM, SSM, USSM</li>
                                <li>11x, 42x, 72x, 88x lenses;</li>
                                <li>full electricity redundant with a&nbsp;generator on&nbsp;a&nbsp;board;</li>
                                <li>internet streaming with own server.</li>
                            </ul>
                        </div>
                        <br/><br/>
                        <div className="col-md-6">
                            <img src="http://tvstart.ru/app/uploads/2017/03/services06.jpg" alt="" width="555px"
                                 height="263px"/></div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>HD&nbsp;Fly away production</strong></p>
                            <ul>
                                <li>20&nbsp;channels switcher;</li>
                                <li>up&nbsp;to&nbsp;16&nbsp;cameras;</li>
                                <li>LSM, SSM, USSM</li>
                                <li>11x, 42x, 72x, 88x lenses;</li>
                                <li>internet streaming with own server.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src="http://tvstart.ru/app/uploads/2017/03/services05.jpg" alt="" width="555px"
                                 height="263px"/></div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-6"><strong>HD&nbsp;DSNG+OB hybrid</strong>
                            <ul>
                                <li>1,6m dish;</li>
                                <li>200/400/700&nbsp;amplifiers;</li>
                                <li>DVB-S/DVS-S2;</li>
                                <li>QPSK/8PSK;</li>
                                <li>MPEG2/MPEG4;</li>
                                <li>on&nbsp;board generator;</li>
                                <li>two mobile hybrid systems;</li>
                                <li>20&nbsp;channels switcher;</li>
                                <li>up&nbsp;to&nbsp;16&nbsp;cameras;</li>
                                <li>LSM 6&nbsp;channels;</li>
                                <li>11x, 42x, 72x, 88x lenses;</li>
                                <li>internet streaming with own server.</li>
                            </ul>
                        </div>
                        <div className="col-md-6"><img src="http://tvstart.ru/app/uploads/2017/03/services02-1.jpg"
                                                       alt="" width="555px" height="263px"/></div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>HD&nbsp;DSNG and Fly away</strong></p>
                            <ul>
                                <li>from&nbsp;1,2m to&nbsp;1,6m dish;</li>
                                <li>200/400/700&nbsp;amplifiers;</li>
                                <li>DVB-S/DVS-S2;</li>
                                <li>QPSK/8PSK;</li>
                                <li>MPEG2/MPEG4;</li>
                                <li>on&nbsp;board generator;</li>
                                <li>two mobile hybrid system.</li>
                            </ul>
                        </div>
                        <div className="col-md-6"><img src="http://tvstart.ru/app/uploads/2017/03/services04.jpg" alt=""
                                                       width="555px" height="263px"/></div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Студия</strong></p>
                            <ul>
                                <li>2-6 cameras;</li>
                                <li>chroma key or&nbsp;city view.</li>
                            </ul>
                            <p><strong>Lighting facilities</strong></p>
                            <p><strong>Crane, polecam, spidercam, underwater cameras;</strong></p>
                            <p><strong>ENG crew and editing;</strong></p>
                            <p><strong>Teleport, turnaround and play out services;</strong></p>
                            <p><strong>Live positions;</strong></p>
                            <p><strong>On&nbsp;line streaming and public internet signal transmission.</strong></p>
                        </div>
                        <div className="col-md-6"><img src="http://tvstart.ru/app/uploads/2017/03/services03.jpg" alt=""
                                                       width="555px" height="263px"/></div>
                    </div>
                    <br/><br/>
                    <p>Наша компания очень гибка в расчете цены. Мы готовы выполнить все ваши требования и найти
                        оптимальное
                        решение в рамках бюджета.</p>
                    <p><img className="alignnone size-full wp-image-82"
                            src="http://tvstart.ru/app/uploads/2017/03/services02.jpg" alt="" width="100%"/></p>
                </div>
            }

            {selectedLanguage === 'EN' &&
                <div className="block__block-post">
                    <h2>Services</h2>
                    <p>Our company has its own technical base and is ready to provide a full range of television
                        production services. We can offer any broadcasting services, from equipment rental to organizing
                        complete television production and live streaming of any event with a fully equipped creative
                        team.</p>
                    <p>Our main office is located in Moscow. However, we provide our services in any region of Russia,
                        Belarus, and Kazakhstan. Using flypack equipment, our company can produce events on different
                        continents and in distant countries.</p>
                    <p><img src="http://tvstart.ru/app/uploads/2017/03/services01-1.jpg" alt="" width="100%"/></p>
                    <p>&nbsp;</p>
                    <h4>TVSTART provides the following technical services:</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>HD OB Tracks</strong></p>
                            <ul>
                                <li>2 switchers from 20 to 36 channels;</li>
                                <li>up to 16 cameras;</li>
                                <li>LSM, SSM, USSM</li>
                                <li>11x, 42x, 72x, 88x lenses;</li>
                                <li>full electricity redundant with a generator on board;</li>
                                <li>internet streaming with own server.</li>
                            </ul>
                        </div>
                        <br/><br/>
                        <div className="col-md-6">
                            <img src="http://tvstart.ru/app/uploads/2017/03/services06.jpg" alt="" width="555px"
                                 height="263px"/>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>HD Fly away production</strong></p>
                            <ul>
                                <li>20 channels switcher;</li>
                                <li>up to 16 cameras;</li>
                                <li>LSM, SSM, USSM</li>
                                <li>11x, 42x, 72x, 88x lenses;</li>
                                <li>internet streaming with own server.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src="http://tvstart.ru/app/uploads/2017/03/services05.jpg" alt="" width="555px"
                                 height="263px"/>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <strong>HD DSNG+OB hybrid</strong>
                            <ul>
                                <li>1.6m dish;</li>
                                <li>200/400/700 amplifiers;</li>
                                <li>DVB-S/DVS-S2;</li>
                                <li>QPSK/8PSK;</li>
                                <li>MPEG2/MPEG4;</li>
                                <li>on board generator;</li>
                                <li>two mobile hybrid systems;</li>
                                <li>20 channels switcher;</li>
                                <li>up to 16 cameras;</li>
                                <li>LSM 6 channels;</li>
                                <li>11x, 42x, 72x, 88x lenses;</li>
                                <li>internet streaming with own server.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src="http://tvstart.ru/app/uploads/2017/03/services02-1.jpg" alt="" width="555px"
                                 height="263px"/>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>HD DSNG and Fly away</strong></p>
                            <ul>
                                <li>from 1.2m to 1.6m dish;</li>
                                <li>200/400/700 amplifiers;</li>
                                <li>DVB-S/DVS-S2;</li>
                                <li>QPSK/8PSK;</li>
                                <li>MPEG2/MPEG4;</li>
                                <li>on board generator;</li>
                                <li>two mobile hybrid system.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src="http://tvstart.ru/app/uploads/2017/03/services04.jpg" alt="" width="555px"
                                 height="263px"/>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Studio</strong></p>
                            <ul>
                                <li>2-6 cameras;</li>
                                <li>chroma key or city view.</li>
                            </ul>
                            <p><strong>Lighting facilities</strong></p>
                            <p><strong>Crane, polecam, spidercam, underwater cameras;</strong></p>
                            <p><strong>ENG crew and editing;</strong></p>
                            <p><strong>Teleport, turnaround and play out services;</strong></p>
                            <p><strong>Live positions;</strong></p>
                            <p><strong>On line streaming and public internet signal transmission.</strong></p>
                        </div>
                        <div className="col-md-6">
                            <img src="http://tvstart.ru/app/uploads/2017/03/services03.jpg" alt="" width="555px"
                                 height="263px"/>
                        </div>
                    </div>
                    <br/><br/>
                    <p>Our company is very flexible in pricing. We are ready to fulfill all your requirements and find
                        the optimal solution within the budget.</p>
                    <p><img className="alignnone size-full wp-image-82"
                            src="http://tvstart.ru/app/uploads/2017/03/services02.jpg" alt="" width="100%"/></p>
                </div>
            }
        </div>
    )
}

export default Service
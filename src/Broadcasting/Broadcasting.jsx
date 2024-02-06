import React, { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import axios from 'axios';
import './Broadcasting.css';
import {useLanguage} from "../LanguageContext/LanguageContext";
import star from "../Contact/build.png";

const Broadcasting = () => {
    const [broadcastData, setBroadcastData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { selectedLanguage } = useLanguage();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://tv-start.onrender.com/broadcast/');
                setBroadcastData(response.data.results || []);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const generalOperatorsData = broadcastData.filter(item => item.type_of_broadcast && item.type_of_broadcast.name_ru === 'Общероссийские операторы');
    const smartTVData = broadcastData.filter(item => item.type_of_broadcast && item.type_of_broadcast.name_ru === 'SMART TV');

    return (
        <div className="content">

            {selectedLanguage === "RU" &&
                <div>
                    <h2>Вещание</h2>

                    {loading ? (
                        <div className="loader">
                            <ScaleLoader color="#36d7b7"/>
                        </div>
                    ) : (
                        <>
                            <div className="wrapper">
                                <div className="wrappper">
                                    <p className="text">Общероссийские операторы</p>
                                </div>
                                <div className="first-data">
                                    {generalOperatorsData.map((item, index) => (
                                        <div className="wrap" key={index}>
                                            <div className="inner">
                                                <img src={item.image} alt={item.name_ru} className="images"/>
                                                <a href={item.url} target="_blank" className="link">
                                                    {item.name_ru}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="last-three">
                                <div className="inform">
                                    <p className="tv">СМАРТ ТВ</p>
                                </div>
                                <div className="information">
                                    <div className='information-content'>
                                        {smartTVData.map((item, index) => (
                                            <div className="wrap-content" key={index}>
                                                <div className="inner">
                                                    <div className="wrap-colum">
                                                        <img src={item.image} alt={item.name_ru} className="images"/>
                                                    </div>
                                                    <div className="wrap-colum">
                                                        <a href={item.url} target="_blank" className="link">
                                                            {item.name_ru}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="content-page">
                                <div className="margin-info">
                                    <div className="margin-flex">
                                        <div className="margin-page">
                                            <p className="text-page">Интернет</p>
                                        </div>
                                    </div>
                                    <div className="margin-footer">
                                        <img className="youtube"
                                             src="https://tvstart.ru//app/uploads/2019/12/yt_logo_rgb_light.png"
                                             alt=""/>
                                        <a href="https://www.youtube.com/c/TVSTARTLIVE">youtube.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className='map'>
                                <iframe className="iframe"
                                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae544d4d3c03bf1223160be276fb1aeea96d804e93e689193a1659758e5f559dd&amp;source=constructor"
                                        width="1008" height="480" frameBorder="0"></iframe>
                            </div>
                            <p>
                        <span className="spannn">
                            <img className="alignleft wp-image-23615"
                                 src="http://tvstart.ru//app/uploads/2019/12/51b05ea9-ddfb-4b2a-83c1-7cad44f46ca4.png"
                                 alt="" width="30" height="30"/>
                            <span> - канал вещает в сети.</span>
                         </span>
                            </p>
                            <p>
                        <span className="spannn">
                            <img className="alignleft wp-image-23614"
                                 src="http://tvstart.ru//app/uploads/2019/12/8fecded4-4b00-4016-92c2-423b0407b857.png"
                                 alt="" width="30" height="30"/>
                            &nbsp;- ведутся переговоры о включении в кабельную сеть.
                        </span>
                            </p>
                        </>
                    )}
                </div>
            }

            {selectedLanguage === "EN" &&
                <div>
                    <h2>Broadcasting</h2>

                    {loading ? (
                        <div className="loader">
                            <ScaleLoader color="#36d7b7"/>
                        </div>
                    ) : (
                        <>
                            <div className="wrapper">
                                <div className="wrappper">
                                    <p className="text">All-Russian Operators</p>
                                </div>
                                <div className="first-data">
                                    {generalOperatorsData.map((item, index) => (
                                        <div className="wrap" key={index}>
                                            <div className="inner">
                                                <img src={item.image} alt={item.name_en} className="images"/>
                                                <a href={item.url} target="_blank" className="link">
                                                    {item.name_ru}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="wrapper last-three">
                                <div className="inform">
                                    <p className="tv">SMART TV</p>
                                </div>
                                <div className="information">
                                    <div className="smart-tv-data">
                                        <div className="smart-inform">
                                            {smartTVData.map((item, index) => (
                                                <div className="wrap-content" key={index}>
                                                    <div className="inner">
                                                        <div className="wrap-colum">
                                                            <img src={item.image} alt={item.name_en}
                                                                 className="images"/>
                                                        </div>
                                                        <div className="wrap-colum">
                                                            <a href={item.url} target="_blank" className="link">
                                                                {item.name_ru}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-page">
                                <div className="margin-info">
                                    <div className="margin-flex">
                                        <div className="margin-page">
                                            <p className="text-page">Internet</p>
                                        </div>
                                    </div>
                                    <div className="margin-footer">
                                        <img className="youtube"
                                             src="https://tvstart.ru//app/uploads/2019/12/yt_logo_rgb_light.png"
                                             alt=""/>
                                        <a href="https://www.youtube.com/c/TVSTARTLIVE">youtube.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className='map'>
                                <iframe className="iframe"
                                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae544d4d3c03bf1223160be276fb1aeea96d804e93e689193a1659758e5f559dd&amp;source=constructor"
                                        width="1008" height="480" frameBorder="0"></iframe>
                            </div>
                            <p>
                <span className="spannn">
                    <img className="alignleft wp-image-23615"
                         src="http://tvstart.ru//app/uploads/2019/12/51b05ea9-ddfb-4b2a-83c1-7cad44f46ca4.png"
                         alt="" width="30" height="30"/>
                    <span> - the channel broadcasts on the network.</span>
                </span>
                            </p>
                            <p>
                <span className="spannn">
                    <img className="alignleft wp-image-23614"
                         src="http://tvstart.ru//app/uploads/2019/12/8fecded4-4b00-4016-92c2-423b0407b857.png" alt=""
                         width="30" height="30"/>
                    &nbsp;- negotiations are underway for inclusion in the cable network.
                </span>
                            </p>
                        </>
                    )}
                </div>
            }

        </div>
    );
};

export default Broadcasting;


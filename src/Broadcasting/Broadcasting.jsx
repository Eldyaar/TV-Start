import React, { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import axios from 'axios';
import './Broadcasting.css';

const Broadcasting = () => {
    const [broadcastData, setBroadcastData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const firstData = broadcastData.slice(0, broadcastData.length - 3);
    const lastThreeData = broadcastData.slice(-3);

    return (
        <div className="content">
            <h2>Вещание</h2>

            {loading ? (
                <div className="loader">
                    <ScaleLoader color="#36d7b7" />
                </div>
            ) : (
                <>
                    <table>
                        <tbody>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="wrapper">
                        <div className="wrappper">
                            <p className="text">Общероссийские операторы</p>
                        </div>
                        <div className="first-data">
                            {firstData.map((item, index) => (
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

                    <table>
                        <tbody>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="wrapper last-three">
                        <div className="wrappper">
                            <p className="tv">СМАРТ ТВ</p>
                        </div>
                        {lastThreeData.map((item, index) => (
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

                    <table>
                        <tbody>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp; </td>
                        </tr>
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default Broadcasting;


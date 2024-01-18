import React from 'react'
import './Cable.css';
import {useLanguage} from "../LanguageContext/LanguageContext";

const Cable = () => {
  const { selectedLanguage } = useLanguage();

  return (
      <div className="content">

        {selectedLanguage === "RU" &&
            <div className="row">
              <div className="col-md-12">
                <div className="block__block-post">
                  <h2 className="progr">Кабельным операторам</h2>
                  <p className="hidden">Технические параметры приема т/к «СТАРТ»</p>
                  <h4>SD формат</h4>
                  <table className="tbl">
                    <tbody>
                    <tr>
                      <td colSpan="2">Cпутник ABS-2А</td>
                    </tr>
                    <tr>
                      <td>Канал</td>
                      <td>СТАРТ</td>
                    </tr>
                    <tr>
                      <td>Орбитальная позиция</td>
                      <td>75°&nbsp;в.д.</td>
                    </tr>
                    <tr>
                      <td>Номер транспондера</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Полное обеспечение всех транспондеров <br/>
                        при прохождении теневых участков
                      </td>
                      <td>имеется</td>
                    </tr>
                    <tr>
                      <td>Частота</td>
                      <td>11&nbsp;605&nbsp;МГц</td>
                    </tr>
                    <tr>
                      <td>Символьная скорость</td>
                      <td>43,2&nbsp;Мсимв/с</td>
                    </tr>
                    <tr>
                      <td>FEC</td>
                      <td>07/08/2019</td>
                    </tr>
                    <tr>
                      <td>Поляризация</td>
                      <td>вертикальная</td>
                    </tr>
                    <tr>
                      <td>Модуляция</td>
                      <td>QPSK</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <h4>HD&nbsp;формат:</h4>
                  <div>
                    <ol>
                      <li>Наземная точка доступа АО&nbsp;«ЦКВС MSK-IX» <br/>
                        г. Москва, ул. Бутлерова д.7, Медиалогистика.<br/>
                        <b>Технические параметры:</b> видеокодек МР4, аудиокодек МР2.
                      </li>
                      <li>Аппаратная «Синтерра Медиа» (ул. Годовикова)</li>
                      <li>Аппаратная «Ростелеком» (ул. Дубовой Рощи)</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
        }

        {selectedLanguage === "EN" &&
            <div className="row">
              <div className="col-md-12">
                <div className="block__block-post">
                  <h2 className="progr">For Cable Operators</h2>
                  <p className="hidden">Technical parameters for receiving TV channel "START"</p>
                  <h4>SD Format</h4>
                  <table className="tbl">
                    <tbody>
                    <tr>
                      <td colSpan="2">Satellite ABS-2A</td>
                    </tr>
                    <tr>
                      <td>Channel</td>
                      <td>START</td>
                    </tr>
                    <tr>
                      <td>Orbital position</td>
                      <td>75° E</td>
                    </tr>
                    <tr>
                      <td>Transponder number</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Full coverage of all transponders <br/>
                        during passage through shadowed areas
                      </td>
                      <td>available</td>
                    </tr>
                    <tr>
                      <td>Frequency</td>
                      <td>11,605 MHz</td>
                    </tr>
                    <tr>
                      <td>Symbol rate</td>
                      <td>43.2 Msymb/s</td>
                    </tr>
                    <tr>
                      <td>FEC</td>
                      <td>07/08/2019</td>
                    </tr>
                    <tr>
                      <td>Polarization</td>
                      <td>vertical</td>
                    </tr>
                    <tr>
                      <td>Modulation</td>
                      <td>QPSK</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <h4>HD Format:</h4>
                  <div>
                    <ol>
                      <li>Ground access point AO "TSKVS MSK-IX" <br/>
                        Moscow, Butlerova St. 7, Medialogistics.<br/>
                        <b>Technical parameters:</b> video codec MP4, audio codec MP2.
                      </li>
                      <li>Hardware "Sinterra Media" (Godovikova St.)</li>
                      <li>Hardware "Rostelecom" (Dubovaya Roscha St.)</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
        }

      </div>
  )
}

export default Cable
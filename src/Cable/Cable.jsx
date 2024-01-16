import React from 'react'
import './Cable.css';

const Cable = () => {
  return (
      <div className="content">

        <div className="row">
          <div className="col-md-12">
            <div className="block__block-post">
              <h2>Кабельным операторам</h2>
              <h3>Технические параметры приема т/к «СТАРТ»</h3>
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

      </div>
  )
}

export default Cable
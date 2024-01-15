import React, { useState, useEffect } from 'react';
import "../Api/Api"
const Api = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tv-start.onrender.com/match/');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Ошибка при получении данных:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Данные из API:</h1>
      <div>
        {/* Обновим условие и использование map для обработки результатов */}
        {Array.isArray(data.results) && data.results.length > 0 ? (
          data.results.map(item => (
            <div key={item.id} className='api_container'>
              <img src='https://tv-start.onrender.com/media/images/teams/%D0%94%D0%B0%D1%80%D1%8E%D1%88%D1%88%D0%B0%D1%84%D0%B0%D0%BA%D0%B0.png' alt="" />
              <h3>{item.name_ru}</h3>
              <p>{item.created_date}</p> 
            </div>  
          
          ))
        ) : (
          <li>Нет данных</li>
        )}
      </div>
    </div>
  );
};

export default Api;




















import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import programData from './ProgramsData';

import './Programm.css';


const Program = () => {
    const [day, setDay] = useState('')


    const filterByDay = () => {
        const daysOfWeek = [
            'Понедельник', 
            'Вторник', 
            'Среда',
            'Четверг', 
            'Пятница', 
            'Суббота', 
            'Воскресенье',
        ]

        const curDate = new Date()
        const yesterday = daysOfWeek[curDate.getDay() - 2]
        const today = daysOfWeek[curDate.getDay() - 1]
        const tomorrow = daysOfWeek[curDate.getDay()]
        const dateObj = new Date(curDate)
    
        const day = dateObj.getDate().toString().padStart(2, '0')
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0')
        const year = dateObj.getFullYear()
        const currentDate = `${day}-${month}-${year}`
    
        const helper = []
        let helperIndex = 0
        programData.forEach((item) => {
            if (currentDate === item.date_of_match) {
                helper[helperIndex] = {...item}
                helperIndex++
            }
        })

        daysOfWeek.forEach((day, index) => {
            if (day === today) {
                daysOfWeek[index] = 'Сегодня'
            } else if (day === tomorrow) {
                daysOfWeek[index] = 'Завтра'
            } else if (day === yesterday) {
                daysOfWeek[index] = 'Вчера'
            }
        })

        return {
            helper,
            daysOfWeek
        }
    }

    const resData = filterByDay()

    return (
        <div className='section-program'>    
            <div className='content'>
                <div className='program'>
                    <div className='program-nav'>
                        <a href='https://tv.yandex.ru/channel/start-triumf-1476' target='_blank'>
                            <h2 className='program-nav__link'>
                                Программа Телеканала «СТАРТ Триумф»
                            </h2>
                        </a>
                        <div className='program-nav__actions'>
                            <h2 className='program-nav__actions-title'>
                                Программа Телеканала «СТАРТ»
                            </h2>
                            <div className='program-nav__actions-navbar'>
                                {resData.daysOfWeek.map((item) => {
                                    return <NavLink className='program-nav__actions-navbar__link'>{item}</NavLink>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='program-content'>
                        <Content curDay={resData.helper} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Content = ({ curDay }) => {
    return (
        curDay.map((data) => {
            return <ProgramContentItem data={data}/>
        })
    )
}

const ProgramContentItem = ({ data }) => {
    const checkDescription = (dataObj) => {
        if (dataObj.live) {
            return (
                <>
                    <span className='live'>Прямой эфир</span>
                    {dataObj.description}
                </>
            )
        } else {
            return dataObj.description
        }
    }

    return (
        <div className='program-content__item'>
            <div className='program-content__item-time'>
                <div className='program-content__item-time__value'>{data.time_value}</div>
                <div className='program-content__item-time__region'>{data.time_region}</div>
            </div>
            <div className='program-content__item-description'>
                {checkDescription(data)}
            </div>
        </div>
    )
}

export default Program;
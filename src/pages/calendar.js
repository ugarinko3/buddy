import '../css/calendar.scss';
import React from 'react';

function Calendar () {
    const calendarData = {
            "calendar": [
                {
                    "day": "1",
                    "task": "Завершить отчет по проекту  дадададададдадададада ываыввавыа",
                    "data_time": "12 December 2024",
                    "activity": "active"
                },
                {
                    "day": "2",
                    "task": "Подготовить презентацию для совещания дадададдадададада ыаываывавы",
                    "data_time": "12 December 2024",
                    "activity": ""
                },
                {
                    "day": "3",
                    "task": "Подготовить презентацию для совещания дадададададдадада ыыаыва ыаыва ы",
                    "data_time": "12 December 2024",
                    "activity": "progress"
                },
                {
                    "day": "4",
                    "task": "Подготовить презентацию для совещания ддадададададдада авыавыаывааываыва",
                    "data_time": "12 December 2024",
                    "activity": "progress"
                },
                {
                    "day": "5",
                    "task": "",
                    "data_time": "12 December 2024",
                    "activity": "no-active"
                }
            ]
    }

    return (
        <div>
            <div className='calendar'>
                <div className='calendar-container'>
                    {calendarData && (
                        calendarData.calendar.map((day, index) => (
                            <div className={`calendar-day ${day.activity}`} key={index}>
                                <div className='day'>
                                    <p><strong>{day.day}<sup class="superscript">th</sup> day</strong></p>
                                </div>
                                <div className='task'><p>{day.task}</p></div>
                                <div className='data'><p>{day.data_time}</p></div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}


export default Calendar;
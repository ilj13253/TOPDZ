import React, { useState } from 'react';

export function Calendar () {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event) => {
    const [year, month] = event.target.value.split('-');
    setSelectedDate(new Date(year, month - 1, 1));
  };

  const generateCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendar = [];
    let week = [];
    let dayOfWeek = firstDay.getDay() || 7;
    for (let i = 1; i < dayOfWeek; i++) {
      week.push(<td key={`${i}`}></td>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(<td key={day}>{day}</td>);

      if (week.length === 7 || day === daysInMonth) {
        calendar.push(<tr key={`week-${day}`}>{week}</tr>);
        week = [];
      }
    }

    return calendar;
  };

  return (
    <div>
      <h2>Выберите месяц и год:</h2>
      <input type="month" onChange={handleDateChange} />

      <table>
        <thead>
          <tr>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Вс</th>
          </tr>
        </thead>
        <tbody>{generateCalendar()}</tbody>
      </table>
    </div>
  );
};

//export default Calendar;

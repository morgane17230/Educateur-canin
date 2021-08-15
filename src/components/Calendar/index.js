/* eslint-disable no-mixed-operators */
import React, { useState } from 'react';
import DatePicker from './DatePicker';
import Scheduler from './Scheduler';

import '../../styles/index.scss';

// == Composant
const Calendar = () => {
  const [chosenDay, setChosenDay] = useState(new Date());
  const year = new Date(chosenDay).getFullYear();
  const month = new Date(chosenDay).getMonth();
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [date, setDate] = useState(new Date().getDate());
  const [weekNumber, setWeekNumber] = useState(Math.floor(
    ((new Date(chosenDay) - new Date(year, 0, 1)) / 86400000
            + new Date(chosenDay).getDay() - 1)
        / 7,
  ));

  // Display previous month

  const getPrevMonth = () => {
    setChosenDay(
      new Date(
        year,
        month - 1,
        1,
      ),
    );
  };

  // Display next month

  const getNextMonth = () => {
    setChosenDay(new Date(year, month + 1, 1));
  };

  return (
    <div className="app">
      <DatePicker
        getPrevMonth={getPrevMonth}
        getNextMonth={getNextMonth}
        daysInMonth={daysInMonth}
        setDaysInMonth={setDaysInMonth}
        date={date}
        setDate={setDate}
        year={year}
        month={month}
        chosenDay={chosenDay}
        setChosenDay={setChosenDay}
      />
      <Scheduler
        daysInMonth={daysInMonth}
        setDaysInMonth={setDaysInMonth}
        getPrevMonth={getPrevMonth}
        getNextMonth={getNextMonth}
        date={date}
        setDate={setDate}
        year={year}
        month={month}
        chosenDay={chosenDay}
        setChosenDay={setChosenDay}
        weekNumber={weekNumber}
        setWeekNumber={setWeekNumber}
      />
    </div>
  );
};

export default Calendar;

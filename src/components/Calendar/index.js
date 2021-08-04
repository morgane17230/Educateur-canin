import React, { useState } from 'react';
import DatePicker from './DatePicker';
import Scheduler from './Scheduler';

import '../../styles/index.scss';

// == Composant
const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [date, setDate] = useState(new Date().getDate());
  const [chosenDay, setChosenDay] = useState(Date.now());
  // Display previous month

  const getPrevDate = () => {
    if (month <= 1) {
      setYear(year - 1);
      setMonth(12);
    }
    else {
      setMonth(month - 1);
    }
  };

  // Display next month

  const getNextDate = () => {
    if (month >= 12) {
      setMonth(1);
      setYear(year + 1);
    }
    else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="app">
      <DatePicker
        getPrevDate={getPrevDate}
        getNextDate={getNextDate}
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
        getPrevDate={getPrevDate}
        getNextDate={getNextDate}
        daysInMonth={daysInMonth}
        setDaysInMonth={setDaysInMonth}
        date={date}
        setDate={setDate}
        year={year}
        month={month}
        chosenDay={chosenDay}
        setChosenDay={setChosenDay}
      />
    </div>
  );
};

export default Calendar;

/* eslint-disable no-mixed-operators */
import React, { useState } from 'react';
import DatePicker from 'src/components/Calendar/DatePicker';
import Scheduler from 'src/components/Calendar/Scheduler';
import EventDetails from 'src/components/Calendar/EventDetails';

import 'src/styles/adminplanning.scss';

// == Composant
const AdminPlanning = () => {
  const [chosenDay, setChosenDay] = useState(new Date());
  const year = new Date(chosenDay).getFullYear();
  const month = new Date(chosenDay).getMonth();
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [date, setDate] = useState(new Date().getDate());

  // Display previous month

  const getPrevMonth = () => {
    setChosenDay(new Date(year, month - 1, 1));
  };

  // Display next month

  const getNextMonth = () => {
    setChosenDay(new Date(year, month + 1, 1));
  };

  return (
    <div className="calendar">
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
      />
      <div className="calendar-right">
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

        <EventDetails />
      </div>
    </div>
  );
};

export default AdminPlanning;

/* eslint-disable no-mixed-operators */
import React, { useState } from 'react';
import CreateEvent from 'src/containers/BackOffice/Calendar/CreateEvent';
import DatePicker from './DatePicker';
import Scheduler from './Scheduler';
import EventDetails from './EventDetails';

import 'src/styles/calendar.scss';

// == Composant
const Calendar = () => {
  const [chosenDay, setChosenDay] = useState(new Date());
  const year = new Date(chosenDay).getFullYear();
  const month = new Date(chosenDay).getMonth();
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [date, setDate] = useState(new Date().getDate());
  const [openCreateModal, setOpenCreateModal] = useState(false);

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
        setOpenCreateModal={setOpenCreateModal}
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
          setOpenCreateModal={setOpenCreateModal}
        />
        {openCreateModal ? (
          <CreateEvent
            setOpenCreateModal={setOpenCreateModal}
            chosenDay={chosenDay}
            setChosenDay={setChosenDay}
          />
        ) : (
          <EventDetails />
        )}
      </div>
    </div>
  );
};

export default Calendar;

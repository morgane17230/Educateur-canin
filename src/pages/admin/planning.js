/* eslint-disable no-mixed-operators */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'src/components/Calendar/DatePicker';
import Scheduler from 'src/components/Calendar/Scheduler';
import EventDetails from 'src/components/Calendar/EventDetails';

import 'src/styles/adminplanning.scss';

// == Composant
const AdminPlanning = ({ onGetEvents, events }) => {
  const [chosenDay, setChosenDay] = useState(new Date());
  const year = new Date(chosenDay).getFullYear();
  const month = new Date(chosenDay).getMonth();
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [date, setDate] = useState(new Date().getDate());
  const [eventValue, setEventValue] = useState(0);

  useEffect(() => {
    onGetEvents();
  }, []);

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
        events={events}
        setEventValue={setEventValue}
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

        <EventDetails events={events} eventValue={eventValue} />
      </div>
    </div>
  );
};

AdminPlanning.propTypes = {
  onGetEvents: PropTypes.func.isRequired,
  events: PropTypes.array,
};

AdminPlanning.defaultProps = {
  events: [],
};

export default AdminPlanning;

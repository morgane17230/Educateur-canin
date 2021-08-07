/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

// StyleSheet

import 'src/styles/scheduler.scss';

const Scheduler = ({
  year,
  month,
  setDate,
  daysInMonth,
  setDaysInMonth,
  getNextDate,
  getPrevDate,
  chosenDay,
}) => {
  const [displayMonth, setDisplayMonth] = useState(false);
  const [displayWeek, setDisplayWeek] = useState(false);
  const [displayDay, setDisplayDay] = useState(false);

  const onDisplayWeek = () => {
    setDisplayWeek(true);
    setDisplayMonth(false);
    setDisplayDay(false);
  };

  const onDisplayMonth = () => {
    setDisplayWeek(false);
    setDisplayMonth(true);
    setDisplayDay(false);
  };

  const onDisplayDay = () => {
    setDisplayWeek(false);
    setDisplayMonth(false);
    setDisplayDay(true);
  };

  // Number of Days in Month

  if (month <= 7) {
    if (month % 2 === 0) {
      setDaysInMonth(30);
    }
    else {
      setDaysInMonth(31);
    }
  }
  else if (month % 2 === 1) {
    setDaysInMonth(30);
  }
  else {
    setDaysInMonth(31);
  }
  if (month === 2) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          setDaysInMonth(28);
        }
        else {
          setDaysInMonth(29);
        }
      }
      else {
        setDaysInMonth(29);
      }
    }
    else {
      setDaysInMonth(28);
    }
  }

  // month display

  const monthArray = [];

  for (let i = 1; i < daysInMonth + 1; i++) {
    monthArray.push(
      <button
        type="button"
        key={i}
        className="scheduler-content-item"
        onClick={() => setDate(i)}
      >
        {new Date(year, month - 1, i).toLocaleDateString('fr-FR', {
          weekday: 'long',
          day: 'numeric',
        })}
      </button>,
    );
  }

  // week display

  const dayHours = [];
  const weekDays = ['Heures'];
  const currentDate = new Date(chosenDay);
  const currentDay = currentDate.getDay();
  const lessDays = currentDay === 0 ? 6 : currentDay - 1;
  for (let h = 8; h <= 18; h++) {
    for (let m = 0; m < 4; m++) {
      dayHours.push(
        new Date(new Date(Date.now()).setHours(h)).setMinutes(m * 15),
      );
      for (let i = 0; i < 7; i++) {
        const weekDay = new Date(
          new Date(
            year,
            currentDate.getMonth(),
            currentDate.getDate() + i,
          ).setDate(
            new Date(
              year,
              currentDate.getMonth(),
              currentDate.getDate() + i,
            ).getDate() - lessDays,
          ),
        );
        weekDay.setHours(h);
        weekDay.setMinutes(15 * m);
        dayHours.push(weekDay);
        weekDays.push(weekDay.toLocaleDateString('fr-FR', { day: 'numeric', weekday: 'long' }));
      }
    }
  }

  const weekHoursList = (weekDay, index) => (
    <div
      key={index}
      value={Date.parse(weekDay)}
      className="scheduler-content-item "
    >
      {new Date(weekDay).getHours()}h
      {new Date(weekDay).getMinutes() === 0
        ? null
        : new Date(weekDay).getMinutes()}
    </div>
  );
  const weekDaysCopy = [...new Set(weekDays)];

  const weekDayList = (weekDay, index) => (
    <div key={index} className="scheduler-content-item">
      {weekDay}
    </div>
  );

  return (
    <div className="scheduler">
      <div className="scheduler-header">
        <button
          className="prevyear"
          aria-label="previous year"
          type="button"
          onClick={getPrevDate}
        >
          <Icon path={mdiChevronLeft} title="next date" size={1} />
        </button>
        <span>
          {new Date(
            Date.UTC(year, month, 0, 0, 0, 0),
          ).toLocaleDateString('fr-FR', { month: 'long' })}{' '}
          {year}
        </span>
        <div className="scheduler-header-choice">
          <button
            aria-label="day"
            type="button"
            onClick={onDisplayDay}
          >
            Jour
          </button>
          <button
            aria-label="week"
            type="button"
            onClick={onDisplayWeek}
          >
            Semaine
          </button>
          <button
            aria-label="month"
            type="button"
            onClick={onDisplayMonth}
          >
            Mois
          </button>
        </div>
        <button
          className="next-year"
          aria-label="next year"
          type="button"
          onClick={getNextDate}
        >
          <Icon path={mdiChevronRight} title="next date" size={1} />
        </button>
      </div>
      <div className="scheduler-content-header">
        {weekDaysCopy.map(weekDayList)}
      </div>
      {displayWeek && (
      <div className="scheduler-content">
        {dayHours.map(weekHoursList)}
      </div>
      )}
      {displayDay && (
      <div className="scheduler-content">Affichage du jour</div>
      )}
      {displayMonth && (
      <div className="scheduler-content">Affichage du mois</div>
      )}
    </div>
  );
};

Scheduler.propTypes = {
  year: PropTypes.number.isRequired,
  getPrevDate: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired,
  getNextDate: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  setDaysInMonth: PropTypes.func.isRequired,
  chosenDay: PropTypes.number.isRequired,
};

export default Scheduler;

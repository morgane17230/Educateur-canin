/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Week from 'src/containers/BackOffice/Calendar/Week';
import Month from './Month';
import Day from './Day';

// StyleSheet

import 'src/styles/scheduler.scss';

const Scheduler = ({
  year,
  month,
  setDate,
  daysInMonth,
  setDaysInMonth,
  chosenDay,
  setChosenDay,
  getPrevMonth,
  getNextMonth,
  setOpenCreateModal,
}) => {
  const [displayMonth, setDisplayMonth] = useState(false);
  const [displayWeek, setDisplayWeek] = useState(true);
  const [displayDay, setDisplayDay] = useState(false);

  const lessDay = new Date(chosenDay).getDay() === 0
    ? 6
    : new Date(chosenDay).getDay() - 1;
  const moreDay = new Date(chosenDay).getDay() === 0
    ? 0
    : 7 - new Date(chosenDay).getDay();

  const weekStart = new Date(
    new Date(chosenDay).getTime() - 86400000 * lessDay,
  );
  const weekEnd = new Date(
    new Date(chosenDay).getTime() + 86400000 * moreDay,
  );

  const getPrevDate = () => {
    if (displayWeek) {
      setChosenDay(new Date(Date.parse(weekStart) - 86400000 * 7));
    }
    else if (displayMonth) {
      getPrevMonth();
    }
    else if (displayDay) {
      setChosenDay(new Date(new Date(chosenDay).getTime() - 86400000));
    }
  };

  const getNextDate = () => {
    if (displayWeek) {
      setChosenDay(
        new Date(
          new Date(chosenDay).getTime() + 86400000 * (moreDay + 1),
        ),
      );
    }
    else if (displayMonth) {
      getNextMonth();
    }
    else if (displayDay) {
      setChosenDay(new Date(new Date(chosenDay).getTime() + 86400000));
    }
  };

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

  useEffect(() => {
    if (month + 1 <= 7) {
      if (month + 1 === 2) {
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
      else if ((month + 1) % 2 === 0) {
        setDaysInMonth(30);
      }
      else {
        setDaysInMonth(31);
      }
    }
    else if (month + 1 > 7) {
      if ((month + 1) % 2 === 0) {
        setDaysInMonth(31);
      }
      else {
        setDaysInMonth(30);
      }
    }
  }, [month]);

  return (
    <div className="scheduler">
      <div className="scheduler-header">
        <div className="scheduler-header-date">
          <button
            className="prevyear"
            aria-label="previous year"
            type="button"
            onClick={getPrevDate}
          >
            <Icon
              path={mdiChevronLeft}
              title="next date"
              size={1}
            />
          </button>

          {displayWeek && (
            <>
              <div>
                {new Date(weekStart).toLocaleDateString(
                  'fr-FR',
                  {
                    month: 'long',
                    year: 'numeric',
                  },
                )}{' '}
                -{' '}
                {new Date(weekEnd).toLocaleDateString('fr-FR', {
                  month: 'long',
                  year: 'numeric',
                })}{' '}
              </div>
              <div>
                Semaine{' '}
                {Math.floor(
                  ((Date.parse(weekStart)
                                        - Date.parse(year, 0, 1))
                                        / 86400000
                                        + new Date(weekStart).getDay()
                                        - 1)
                                        / 7
                                        + 1,
                )}
              </div>
            </>
          )}
          {displayMonth && (
            <div>
              {new Date(chosenDay).toLocaleDateString('fr-FR', {
                month: 'long',
                year: 'numeric',
              })}
            </div>
          )}
          {displayDay && (
            <div>
              {new Date(chosenDay).toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
          )}

          <button
            className="next-year"
            aria-label="next year"
            type="button"
            onClick={getNextDate}
          >
            <Icon
              path={mdiChevronRight}
              title="next date"
              size={1}
            />
          </button>
        </div>

        <div className="scheduler-header-choice">
          <div aria-label="day" type="button" onClick={onDisplayDay}>
            Jour
          </div>
          <div
            aria-label="week"
            type="button"
            onClick={onDisplayWeek}
          >
            Semaine
          </div>
          <div
            aria-label="month"
            type="button"
            onClick={onDisplayMonth}
          >
            Mois
          </div>
          <div
            aria-label="month"
            type="button"
            onClick={() => setChosenDay(new Date())}
          >
            Aujourd'hui
          </div>
        </div>
      </div>
      {displayWeek && (
        <Week
          setDate={setDate}
          daysInMonth={daysInMonth}
          chosenDay={chosenDay}
          year={year}
          month={month}
          setChosenDay={setChosenDay}
          setOpenCreateModal={setOpenCreateModal}
        />
      )}
      {displayDay && (
        <Day
          setDate={setDate}
          daysInMonth={daysInMonth}
          chosenDay={chosenDay}
          year={year}
          month={month}
          setOpenCreateModal={setOpenCreateModal}
        />
      )}
      {displayMonth && (
        <Month
          daysInMonth={daysInMonth}
          chosenDay={chosenDay}
          year={year}
          month={month}
          setChosenDay={setChosenDay}
          setOpenCreateModal={setOpenCreateModal}
        />
      )}
    </div>
  );
};

Scheduler.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  setDate: PropTypes.func.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  setDaysInMonth: PropTypes.func.isRequired,
  chosenDay: PropTypes.instanceOf(Date).isRequired,
  setChosenDay: PropTypes.func.isRequired,
  getPrevMonth: PropTypes.func.isRequired,
  getNextMonth: PropTypes.func.isRequired,
  setOpenCreateModal: PropTypes.func.isRequired,
};

export default Scheduler;

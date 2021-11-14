/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React from "react";
import PropTypes from "prop-types";

// StyleSheet

import "src/styles/scheduler.scss";

const Month = ({
    events,
    year,
    month,
    setChosenDay,
    daysInMonth,
    chosenDay,
    setEventValue,
    setOpenCreateEventModale,
}) => {
    // month display

    const days = [];
    const start = new Date(year, month);
    const end = new Date(year, month + 1, 0);
    const dayOfWeekStart = start.getDay();
    const dayOfWeekEnd = end.getDay();

    const lessDays = dayOfWeekStart === 0 ? 6 : dayOfWeekStart - 1;
    const moreDays = dayOfWeekEnd === 0 ? 0 : 7 - dayOfWeekEnd;

    for (let i = 0; i < daysInMonth + lessDays + moreDays; ++i) {
        const weekDay = new Date(
            new Date(year, month, start.getDate() + i).setDate(
                new Date(year, month, start.getDate() + i).getDate() - lessDays
            )
        );
        days.push(Date.parse(weekDay));
    }

    const dayList = (day, index) => {
        const hasEvent = events.filter(
            (event) =>
                Date.parse(
                    new Date(
                        new Date(
                            new Date(Number(event.start_time)).setHours(0)
                        ).setMinutes(0)
                    )
                ) === day
        );

        return (
            <div
                key={day}
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    setChosenDay(new Date(day));
                    setOpenCreateEventModale(true);
                }}
                className={`scheduler-content-month-item 
          ${new Date(day).getMonth() !== month ? "out" : ""}
          ${
              new Date(day).getMonth() === month &&
              new Date(day).getDate() === new Date(chosenDay).getDate()
                  ? " today"
                  : ""
          }`}
            >
                {new Date(day).toLocaleDateString("fr-FR", {
                    weekday: "short",
                    day: "numeric",
                })}
                <div>
                    {hasEvent.length !== 0 && (
                        <div
                            value={hasEvent[0].id}
                            key={index}
                            style={
                                hasEvent.length !== 0
                                    ? {
                                          backgroundColor: `${hasEvent[0].presta.color}`,
                                      }
                                    : {}
                            }
                            className="event"
                            onClick={() => {
                                setEventValue(hasEvent[0].id);
                                setOpenCreateEventModale(false);
                            }}
                        />
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="scheduler-content">
            <div className="scheduler-content-month">{days.map(dayList)}</div>
        </div>
    );
};

Month.propTypes = {
    events: PropTypes.array,
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    chosenDay: PropTypes.instanceOf(Date).isRequired,
    daysInMonth: PropTypes.number.isRequired,
    setChosenDay: PropTypes.func.isRequired,
    setEventValue: PropTypes.func.isRequired,
    setOpenCreateEventModale: PropTypes.func.isRequired,
};

Month.defaultProps = {
    events: [],
};

export default Month;

/* eslint-disable react/no-array-index-key */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React from "react";
import PropTypes from "prop-types";

// StyleSheet

import "src/styles/scheduler.scss";

const Day = ({
    chosenDay,
    events,
    setEventValue,
    setOpenCreateEventModale,
    setChosenDay,
}) => {
    const dayHours = [];
    for (let h = 8; h <= 18; h++) {
        for (let m = 0; m < 4; m++) {
            const minutes = [];
            const weekDay = new Date(chosenDay);
            weekDay.setHours(h);
            weekDay.setMinutes(m * 15);
            weekDay.setUTCSeconds(0);
            for (let l = 0; l < 3; l++) {
                minutes.push(Date.parse(weekDay) + 60000 * (5 * l));
            }
            dayHours.push(minutes);
        }
    }

    // début RDV >= date de la case

    return (
        <div className="scheduler-content">
            <div className="scheduler-content-day">
                <div className="scheduler-content-day-header">Heures</div>{" "}
                {dayHours.map((dayHour, index) => (
                    <div
                        key={`day-${index}`}
                        value={`${dayHour[0]}`}
                        className="scheduler-content-day-item"
                    >
                        {new Date(dayHour[0]).getHours()}h
                        {new Date(dayHour[0]).getMinutes() === 0
                            ? null
                            : new Date(dayHour[0]).getMinutes()}
                        <div className="scheduler-content-dayhour">
                            {dayHour.map((h) => {
                                const hasEvent = events.filter(
                                    (event) =>
                                        event.start_time <= h &&
                                        event.end_time > h
                                );
                                return (
                                    <div
                                        key={h}
                                        value={h}
                                        className="scheduler-content-item-minutes"
                                        style={
                                            hasEvent.length !== 0
                                                ? {
                                                      backgroundColor: `${hasEvent[0].presta.color}`,
                                                  }
                                                : {}
                                        }
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setEventValue(
                                                hasEvent.length !== 0
                                                    ? hasEvent[0].id
                                                    : null
                                            );
                                            setOpenCreateEventModale(
                                                hasEvent.length === 0
                                            );
                                            setChosenDay(new Date(h));
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Day.propTypes = {
    chosenDay: PropTypes.any.isRequired,
    setEventValue: PropTypes.func.isRequired,
    setOpenCreateEventModale: PropTypes.func.isRequired,
    events: PropTypes.array,
    setChosenDay: PropTypes.func.isRequired,
};

Day.defaultProps = {
    events: [],
};

export default Day;

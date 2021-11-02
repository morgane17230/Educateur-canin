import React from 'react';
import events from '../../../data/events.json';
import 'src/styles/event.scss';

const Event = () => {
  console.log('event');
  return (
    <>
      {events.map((event) => (
        <span>{event.start_time}</span>
      ))}
    </>
  );
};

export default Event;

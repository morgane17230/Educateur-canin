import api from './api';

import {
  ON_GET_EVENTS,
  setEvents,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions/event';
import { setError, setValidation } from '../actions/global';

const event = (store) => (next) => async (action) => {
  switch (action.type) {
    case ON_GET_EVENTS: {
      try {
        const events = await api.get('/events');
        const actionGetEvents = setEvents(events.data);
        store.dispatch(actionGetEvents);
      }
      catch (error) {
        const actionGetError = setError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }

    case CREATE_EVENT: {
      const {
        startTime,
        endTime,
        eventAddress,
        prestaId,
        chosenUser,
        eventLat,
        eventLon,
      } = store.getState().global;

      try {
        const newEvent = await api.post('/event', {
          start_time: Date.parse(startTime),
          end_time: Date.parse(endTime),
          address: eventAddress,
          lat: eventLat,
          lon: eventLon,
          user_id: chosenUser.id,
          paid: false,
          presta_id: prestaId,
        });
        const actionSetEvent = setValidation(newEvent.data.validation);
        store.dispatch(actionSetEvent);
        const newEvents = await api.get('/events');
        const actionGetEvents = setEvents(newEvents.data);
        store.dispatch(actionGetEvents);
      }
      catch (error) {
        const actionGetError = setError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }

    case UPDATE_EVENT: {
      const {
        startTime, endTime, eventAddress, prestaId, eventLat, eventLon,
      } = store.getState().global;

      try {
        const modifiedEvent = await api.put(`/event/${action.payload}`, {
          start_time: Date.parse(startTime),
          end_time: Date.parse(endTime),
          address: eventAddress,
          lat: eventLat,
          lon: eventLon,
          paid: false,
          presta_id: prestaId,
        });
        const actionSetModifiedEvent = setValidation(modifiedEvent.data.validation);
        store.dispatch(actionSetModifiedEvent);
        const newEvents = await api.get('/events');
        const actionGetEvents = setEvents(newEvents.data);
        store.dispatch(actionGetEvents);
      }
      catch (error) {
        const actionGetError = setError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }

    case DELETE_EVENT: {
      try {
        const deletedEvent = await api.delete(`/event/${action.payload}`);
        const actionDeleteEvent = setValidation(deletedEvent.data.validation);
        store.dispatch(actionDeleteEvent);
        const newEvents = await api.get('/events');
        const actionGetEvents = setEvents(newEvents.data);
        store.dispatch(actionGetEvents);
      }
      catch (error) {
        const actionGetError = setError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }

    default:
      next(action);
  }
};

export default event;

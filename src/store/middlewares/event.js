import api from './api';

import { ON_GET_EVENTS, setEvents } from '../actions/event';
import { getError } from '../actions/global';

const company = (store) => (next) => async (action) => {
  switch (action.type) {
    case ON_GET_EVENTS: {
      try {
        const events = await api.get('/events');
        const actionGetEvents = setEvents(events.data);
        console.log(events.data);
        store.dispatch(actionGetEvents);
      }
      catch (error) {
        const actionGetError = getError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }
    default:
      next(action);
  }
};

export default company;

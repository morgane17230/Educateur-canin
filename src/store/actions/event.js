export const ON_CREATE_EVENT = 'ON_CREATE_EVENT';
export const ON_GET_EVENTS = 'GET_EVENTS';
export const SET_EVENTS = 'SET_EVENTS';

export const onGetEvents = () => ({
  type: ON_GET_EVENTS,
});

export const setEvents = (payload) => ({
  type: SET_EVENTS,
  payload,
});

export const onCreateEvent = () => ({
  type: ON_CREATE_EVENT,
});

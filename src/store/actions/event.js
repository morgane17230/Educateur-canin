export const ON_GET_EVENTS = 'GET_EVENTS';
export const SET_EVENTS = 'SET_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';
export const SET_EVENT = 'SET_EVENT';
export const SET_START_TIME = 'SET_START_TIME';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

export const onGetEvents = () => ({
  type: ON_GET_EVENTS,
});

export const setEvents = (payload) => ({
  type: SET_EVENTS,
  payload,
});

export const setEvent = (payload) => ({
  type: SET_EVENT,
  payload,
});

export const setStartTime = (payload) => ({
  type: SET_START_TIME,
  payload,
});

export const createEvent = (payload) => ({
  type: CREATE_EVENT,
  payload,
});

export const updateEvent = (payload) => ({
  type: UPDATE_EVENT,
  payload,
});

export const deleteEvent = (payload) => ({
  type: DELETE_EVENT,
  payload,
});

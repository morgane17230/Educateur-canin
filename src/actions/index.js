export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ON_CREATE_EVENT = 'ON_CREATE_EVENT';
export const ON_SEARCH_USER = 'ON_SEARCH_USER';
export const SEARCH_USER = 'SEARCH_USER';
export const SELECT_PRESTATION = 'SELECT_PRESTATION';

export const changeField = (key, value) => ({
  type: CHANGE_FIELD,
  key,
  value,
});
export const onCreateEvent = (payload) => ({
  type: ON_CREATE_EVENT,
  payload,
});
export const onSearchUser = (payload) => ({
  type: ON_SEARCH_USER,
  payload,
});

export const searchUser = (payload) => ({
  type: SEARCH_USER,
  payload,
});

export const selectPrestation = (payload) => ({
  type: SELECT_PRESTATION,
  payload,
});

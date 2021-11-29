export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_ERROR = 'SET_ERROR';
export const SET_VALIDATION = 'SET_VALIDATION';
export const REFRESH_STATE = 'REFRESH_STATE';

export const changeField = (key, value) => ({
  type: CHANGE_FIELD,
  key,
  value,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const setValidation = (payload) => ({
  type: SET_VALIDATION,
  payload,
});

export const refreshState = (payload) => ({
  type: REFRESH_STATE,
  payload,
});

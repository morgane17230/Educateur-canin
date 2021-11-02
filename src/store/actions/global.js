export const CHANGE_FIELD = 'CHANGE_FIELD';
export const GET_ERROR = 'GET_ERROR';

export const changeField = (key, value) => ({
  type: CHANGE_FIELD,
  key,
  value,
});

export const getError = (payload) => ({
  type: GET_ERROR,
  payload,
});

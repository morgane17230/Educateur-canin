export const ON_GET_PRESTAS = 'ON_GET_PRESTAS';
export const SET_PRESTAS = 'SET_PRESTAS';

export const onGetPrestas = () => ({
  type: ON_GET_PRESTAS,
});

export const setPrestas = (payload) => ({
  type: SET_PRESTAS,
  payload,
});

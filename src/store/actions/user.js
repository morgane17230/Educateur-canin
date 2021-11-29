export const SEARCH_USERS = 'SEARCH_USERS';
export const SET_USERS = 'SET_USERS';
export const SEARCH_POSTCODE = ' SEARCH_POSTCODE';
export const SEARCH_CITY = ' SEARCH_CITY';
export const SEARCH_ADDRESS = ' SEARCH_ADDRESS';
export const SET_CITY = 'SET_CITY';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_USER_ADDRESS = 'SET_USER_ADDRESS';
export const SET_USER_CITY = 'SET_USER_CITY';
export const SET_CHOSEN_USER = 'SET_CHOSEN_USER';
export const SET_CLIENT = 'SET_CLIENT';
export const SET_EVENT_ADDRESS = 'SET_EVENT_ADDRESS';
export const CREATE_USER = 'CREATE_USER';

export const searchUsers = (payload) => ({
  type: SEARCH_USERS,
  payload,
});

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

export const setChosenUser = (payload) => ({
  type: SET_CHOSEN_USER,
  payload,
});

export const setClient = (payload) => ({
  type: SET_CLIENT,
  payload,
});

export const searchPostcode = (postcode) => ({
  type: SEARCH_POSTCODE,
  postcode,
});

export const searchCity = (city) => ({
  type: SEARCH_CITY,
  city,
});

export const searchAddress = (address) => ({
  type: SEARCH_ADDRESS,
  address,
});

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});

export const setAddress = (payload) => ({
  type: SET_ADDRESS,
  payload,
});

export const setUserCity = (payload) => ({
  type: SET_USER_CITY,
  payload,
});

export const setUserAddress = (payload) => ({
  type: SET_USER_ADDRESS,
  payload,
});

export const setEventAddress = (payload) => ({
  type: SET_EVENT_ADDRESS,
  payload,
});

export const createUser = () => ({
  type: CREATE_USER,
});

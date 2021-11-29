import {
  CHANGE_FIELD,
  SET_ERROR,
  SET_VALIDATION,
} from 'src/store/actions/global';

import { SET_EVENTS, SET_START_TIME } from 'src/store/actions/event';

import { SET_PRESTAS } from 'src/store/actions/presta';

import {
  SET_USERS,
  SET_ADDRESS,
  SET_CITY,
  SET_USER_ADDRESS,
  SET_USER_CITY,
  SET_CHOSEN_USER,
  SET_EVENT_ADDRESS,
} from 'src/store/actions/user';

const initialState = {
  lastname: '',
  firstname: '',
  address: {},
  postcode: '',
  city: {},
  addresses: [],
  cities: [],
  phone: '',
  email: '',
  startTime: '',
  endTime: '',
  prestaId: '',
  prestation: '',
  error: {},
  loading: true,
  events: [],
  prestas: [],
  users: [],
  user: {},
  userQuery: '',
  username: '',
  chosenUser: {},
  client: '',
  chosenEventAddress: '',
  eventAddress: '',
  eventLat: '',
  eventLon: '',
  validation: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_VALIDATION:
      return {
        ...state,
        validation: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload,
        error: {},
      };
    case SET_PRESTAS:
      return {
        ...state,
        prestas: action.payload,
        error: {},
      };
    case SET_USERS:
      return {
        ...state,
        users: [action.payload],
        error: {},
      };
    case SET_CHOSEN_USER:
      return {
        ...state,
        chosenUser: action.payload,
        error: {},
      };
    case SET_CITY:
      return {
        ...state,
        cities: action.payload,
        error: {},
      };
    case SET_ADDRESS:
      return {
        ...state,
        addresses: action.payload,
        error: {},
      };
    case SET_USER_ADDRESS:
      return {
        ...state,
        address: action.payload,
        error: {},
      };
    case SET_EVENT_ADDRESS:
      return {
        ...state,
        eventAddress:
          action.payload?.properties?.label || action.payload.address,
        eventLat:
          action.payload?.geometry?.coordinates[0] || action.payload.lat,
        eventLon:
          action.payload?.geometry?.coordinates[1] || action.payload.lon,
        error: {},
      };
    case SET_USER_CITY:
      return {
        ...state,
        city: action.payload,
        error: {},
      };
    case SET_START_TIME:
      return {
        ...state,
        startTime: action.payload,
        error: {},
      };
    default:
      return state;
  }
};
export default reducer;

import {
  CHANGE_FIELD,
  GET_ERROR,
} from 'src/store/actions/global';

import {
  SEARCH_USER,
} from 'src/store/actions/user';

import {
  SELECT_PRESTATION,

} from 'src/store/actions/presta';

import {
  ON_CREATE_EVENT,
  SET_EVENTS,
} from 'src/store/actions/event';

const initialState = {
  lastName: '',
  firstName: '',
  number: '',
  street: '',
  postalCode: '',
  city: '',
  dayEvent: new Date(),
  startTime: '',
  endTime: '',
  prestation: '',
  error: {},
  loading: true,
  events: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_EVENTS:
      return {
        ...state,
        ...action.payload,
        events: action.payload,
        error: {},
      };
    case SEARCH_USER:
      return {
        ...state,
        error: {},
      };
    case SELECT_PRESTATION:
      return {
        ...state,
        prestation: action.payload,
      };
    case ON_CREATE_EVENT:
      return {
        ...state,
        dayEvent: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;

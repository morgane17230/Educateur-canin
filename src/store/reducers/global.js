import {
  CHANGE_FIELD,
  GET_ERROR,
} from 'src/store/actions/global';

import {
  SET_EVENTS,
} from 'src/store/actions/event';

import {
  SET_PRESTAS,
} from 'src/store/actions/presta';

const initialState = {
  lastName: '',
  firstName: '',
  housenumber: '',
  street: '',
  postcode: '',
  city: '',
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
  userQuery: '',
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
    case SET_PRESTAS:
      return {
        ...state,
        ...action.payload,
        prestas: action.payload,
        error: {},
      };
    default:
      return state;
  }
};
export default reducer;

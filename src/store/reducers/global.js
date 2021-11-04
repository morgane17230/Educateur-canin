import {
  CHANGE_FIELD,
  GET_ERROR,
} from 'src/store/actions/global';

import {
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
    default:
      return state;
  }
};
export default reducer;

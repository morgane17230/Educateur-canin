import {
  CHANGE_FIELD,
  SEARCH_USER,
  SELECT_PRESTATION,
  ON_CREATE_EVENT,
} from 'src/actions/';

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
  error: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.key]: action.value,
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

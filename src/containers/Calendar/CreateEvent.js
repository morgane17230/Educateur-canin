import { connect } from 'react-redux';
import CreateEvent from 'src/modals/CreateEvent';
import {
  changeField,
  onCreateEvent,
  onSearchUser,
  searchUser,
  selectPrestation,
} from 'src/actions';

const mapStateToProps = (state) => ({
  lastName: state.global.lastName,
  firstName: state.global.firstName,
  number: state.global.number,
  street: state.global.street,
  postalCode: state.global.postalCode,
  city: state.global.city,
  startTime: state.global.startTime,
  endTime: state.global.endTime,
  prestation: state.global.prestation,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: () => {
    const action = changeField();
    dispatch(action);
  },
  onCreateEvent: (payload) => {
    const action = onCreateEvent(payload);
    dispatch(action);
  },
  onSearchUser: (value) => {
    const action = onSearchUser(value);
    dispatch(action);
  },
  searchUser: (value) => {
    const action = searchUser(value);
    dispatch(action);
  },
  onSelectPrestation: (prestation) => {
    const action = selectPrestation(prestation);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);

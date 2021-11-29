import { connect } from 'react-redux';
import { changeField } from 'src/store/actions/global';
import {
  searchPostcode,
  searchCity,
  searchAddress,
  searchUsers,
  setUserAddress,
  setUserCity,
  setUsers,
  setChosenUser,
  setEventAddress,
  createUser,
} from 'src/store/actions/user';
import { onGetPrestas } from 'src/store/actions/presta';
import { createEvent, setStartTime } from 'src/store/actions/event';
import CreateEventModale from 'src/Modals/CreateEventModale';

const mapStateToProps = (state) => ({
  prestas: state.global.prestas,
  prestaId: state.global.prestaId,
  startTime: state.global.startTime,
  endTime: state.global.endTime,
  firstname: state.global.firstname,
  lastname: state.global.lastname,
  email: state.global.email,
  phone: state.global.phone,
  address: state.global.address,
  postcode: state.global.postcode,
  city: state.global.city,
  addresses: state.global.addresses,
  postcodes: state.global.postcodes,
  cities: state.global.cities,
  users: state.global.users,
  userQuery: state.global.userQuery,
  user: state.global.user,
  username: state.global.username,
  chosenUser: state.global.chosenUser,
  client: state.global.client,
  chosenEventAddress: state.global.chosenEventAddress,
  eventAddress: state.global.eventAddress,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: () => {
    dispatch(changeField());
  },
  onGetPrestas: () => {
    dispatch(onGetPrestas());
  },

  searchUsers: (value) => {
    dispatch(searchUsers(value));
  },

  setUsers: (value) => {
    dispatch(setUsers(value));
  },

  setChosenUser: (value) => {
    dispatch(setChosenUser(value));
  },

  searchPostcode: (postcode) => {
    dispatch(searchPostcode(postcode));
  },

  searchCity: (city) => {
    dispatch(searchCity(city));
  },

  searchAddress: (address) => {
    dispatch(searchAddress(address));
  },

  setUserAddress: (userAddress) => {
    dispatch(setUserAddress(userAddress));
  },

  setEventAddress: (eventAddress) => {
    dispatch(setEventAddress(eventAddress));
  },

  setUserCity: (userCity) => {
    dispatch(setUserCity(userCity));
  },

  createUser: () => {
    dispatch(createUser());
  },

  createEvent: () => {
    dispatch(createEvent());
  },

  setStartTime: (startTime) => {
    dispatch(setStartTime(startTime));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventModale);

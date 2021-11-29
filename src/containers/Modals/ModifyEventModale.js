import { connect } from 'react-redux';
import ModifyEventModale from 'src/Modals/ModifyEventModale';
import { changeField } from 'src/store/actions/global';
import { onGetPrestas } from 'src/store/actions/presta';
import {
  searchCity,
  searchAddress,
  setUserCity,
  setEventAddress,
} from 'src/store/actions/user';
import {
  updateEvent,
} from 'src/store/actions/event';

const mapStateToProps = (state) => ({
  prestas: state.global.prestas,
  prestaId: state.global.prestaId,
  startTime: state.global.startTime,
  endTime: state.global.endTime,
  chosenEventAddress: state.global.chosenEventAddress,
  cities: state.global.cities,
  addresses: state.global.addresses,
  eventAddress: state.global.eventAddress,
  city: state.global.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: () => {
    const action = changeField();
    dispatch(action);
  },

  onGetPrestas: () => {
    dispatch(onGetPrestas());
  },

  searchCity: (city) => {
    dispatch(searchCity(city));
  },

  searchAddress: (address) => {
    dispatch(searchAddress(address));
  },

  setEventAddress: (eventAddress) => {
    dispatch(setEventAddress(eventAddress));
  },

  setUserCity: (userCity) => {
    dispatch(setUserCity(userCity));
  },

  updateEvent: (event) => {
    dispatch(updateEvent(event));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyEventModale);

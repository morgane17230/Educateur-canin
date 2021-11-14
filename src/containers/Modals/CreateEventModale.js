import { connect } from 'react-redux';
import CreateEventModale from 'src/Modals/CreateEventModale';
import { changeField } from 'src/store/actions/global';
import { onGetPrestas } from 'src/store/actions/presta';

const mapStateToProps = (state) => ({
  prestas: state.global.prestas,
  prestaId: state.global.prestaId,
  endTime: state.global.startTime,
  firstname: state.global.firstname,
  lastname: state.global.lastname,
  email: state.global.email,
  phone: state.global.phone,
  housenumber: state.global.housenumber,
  street: state.global.street,
  postcode: state.global.postcode,
  city: state.global.city,
  userQuery: state.global.userQuery,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: () => {
    const action = changeField();
    dispatch(action);
  },
  onGetPrestas: () => {
    dispatch(onGetPrestas());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventModale);

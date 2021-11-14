import { connect } from 'react-redux';
import ModifyEventModale from 'src/Modals/ModifyEventModale';
import { changeField } from 'src/store/actions/global';
import { onGetPrestas } from 'src/store/actions/presta';

const mapStateToProps = (state) => ({
  prestas: state.global.prestas,
  prestaId: state.global.prestaId,
  startTime: state.global.startTime,
  endTime: state.global.startTime,
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

export default connect(mapStateToProps, mapDispatchToProps)(ModifyEventModale);

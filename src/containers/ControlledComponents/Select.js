import { connect } from 'react-redux';
import Select from 'src/components/ControlledComponents/Select';
import { changeField } from 'src/store/actions/global';

const mapStateToProps = (state, ownProps) => ({
  inputValue: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (newValue) => {
    const action = changeField(ownProps.name, newValue);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);

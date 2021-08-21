import { connect } from 'react-redux';
import Field from 'src/components/ControlledComponents/Field';
import { changeField } from 'src/actions';

const mapStateToProps = (state, ownProps) => ({
  inputValue: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (newValue) => {
    const action = changeField(ownProps.name, newValue);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);

import { connect } from 'react-redux';
import Editor from 'src/Modals/EditorModale';
import { changeField } from 'src/store/actions/global';

const mapStateToProps = (state) => ({
  reportTitle: state.global.reportTitle,
  reportContent: state.global.reportContent,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: () => {
    const action = changeField();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);

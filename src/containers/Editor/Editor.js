import { connect } from 'react-redux';
import Editor from 'src/components/Editor/Editor';
import { setReportContent } from 'src/store/actions/report';

const mapStateToProps = (state) => ({
  reportContent: state.global.reportContent,
});

const mapDispatchToProps = (dispatch) => ({
  setReportContent: (value) => {
    const action = setReportContent(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);

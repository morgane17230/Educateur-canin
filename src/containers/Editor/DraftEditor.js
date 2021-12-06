import { connect } from 'react-redux';
import DraftEditor from 'src/components/Editor/DraftEditor';
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

export default connect(mapStateToProps, mapDispatchToProps)(DraftEditor);

import { connect } from 'react-redux';
import ConfirmModale from 'src/Modals/ConfirmModale';

import { deleteEvent } from 'src/store/actions/event';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteEvent: (event) => {
    dispatch(deleteEvent(event));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModale);

import { connect } from 'react-redux';
import AdminPlanning from 'src/pages/admin/planning';

import { onGetEvents } from '../../store/actions/event';

const mapStateToProps = (state) => ({
  loading: state.global.loading,
  events: state.global.events,
});

const mapDispatchToProps = (dispatch) => ({
  onGetEvents: () => {
    dispatch(onGetEvents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPlanning);

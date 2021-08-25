import { connect } from 'react-redux';
import Week from 'src/components/BackOffice/Calendar/Week';

const mapStateToProps = (state) => ({
  startTime: state.global.startTime,
  endTime: state.global.endTime,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Week);

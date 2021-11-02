import { connect } from 'react-redux';
import App from 'src/pages/app';

const mapStateToProps = (state) => ({
  loading: state.global.loading,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

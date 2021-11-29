/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

// StyleSheet

import 'src/styles/toast.scss';

const Toast = ({ validation }) => (
  <div className="toast">
    <div>{validation}</div>
  </div>
);

Toast.propTypes = {
  validation: PropTypes.string,
};

Toast.defaultProps = {
  validation: '',
};

export default Toast;

/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

// StyleSheet

import 'src/styles/scheduler.scss';

const Scheduler = ({
  chosenDay,
}) => (
  <>
    <span>Affichage du jour { chosenDay }</span>
  </>
);

Scheduler.propTypes = {
  chosenDay: PropTypes.number.isRequired,
};

export default Scheduler;

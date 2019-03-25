import React from 'react';
import PropTypes from 'prop-types';
import Lane from './LaneContainer';
import styles from './Lanes.css';
import * as actions from './LaneActions';

const Lanes = ({ lanes }) => {
  return (
    <div className={styles.Lanes}>{lanes.map(lane =>
      <Lane className="lane" key={lane.id} lane={lane} {...actions} />
    )}</div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;

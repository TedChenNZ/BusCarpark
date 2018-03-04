import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';

const Carpark = ({ bus }) => {
  if (!isEmpty(bus)) {
    return (
      <div>
        {bus.x},{bus.y},{bus.f}
      </div>
    )
  }
  return null;
};

Carpark.propTypes = {
  bus: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    f: PropTypes.string,
  }),
}

export default Carpark;

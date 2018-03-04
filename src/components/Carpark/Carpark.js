import React from 'react';
import PropTypes from 'prop-types';

const Carpark = ({ bus }) => {
  console.log(bus);
  return (
  <div>
    {bus.x}
  </div>
)
};

Carpark.propTypes = {
  bus: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    f: PropTypes.string,
  }),
}

export default Carpark;
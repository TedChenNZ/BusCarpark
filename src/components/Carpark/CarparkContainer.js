import { connect } from 'react-redux';
import Carpark from './Carpark';

const mapStateToProps = (state) => ({
  bus: state.bus,
});

const CarparkContainer = connect(
  mapStateToProps,
)(Carpark);

export default CarparkContainer;

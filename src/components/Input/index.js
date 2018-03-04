import { connect } from 'react-redux';
import Input from './Input';
import { left, right, move, place } from '../../services/bus/actions';

const mapStateToProps = (state) => ({
  bus: state.bus,
});

const mapDispatchToProps = {
  left,
  right,
  move,
  place
}

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);

export default InputContainer;

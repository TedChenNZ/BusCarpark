import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { COMMANDS, parsePlaceWords, getCommand } from '../../services/commands';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const input = this.state.input;
    try {
      const command = getCommand(input);
      switch (command.name) {
        case COMMANDS.LEFT.name:
          this.props.left();
          break;
        case COMMANDS.RIGHT.name:
          this.props.right();
          break;
        case COMMANDS.MOVE.name:
          this.props.move();
          break;
        case COMMANDS.PLACE.name:
          const { x,y,f } = parsePlaceWords(input);
          this.props.place(x, y, f);
          break;
        case COMMANDS.REPORT.name:
          console.log(this.props.bus);
          break;
        default:
          break;
      }
    } catch (e) {
      console.error(e);
      this.setState({
        error: e,
      });
    }
    this.setState({
      input: '',
    });
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      error: '',
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit = {this.handleSubmit}>
        <TextField
          label="Input"
          id="input"
          value={this.state.input}
          onChange={this.handleChange}
          className={classes.textField}
        />
      </form>
    )
  }
}

Input.propTypes = {
  left: PropTypes.func.isRequired,
  right: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
  place: PropTypes.func.isRequired,
}

export default withStyles(styles)(Input);

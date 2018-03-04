import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { COMMANDS, parsePlaceWords, getCommand } from '../../services/commands';
import ReportDialog from './ReportDialog';
import Button from 'material-ui/Button';

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

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      error: '',
      openDialog: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
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
          if (!isEmpty(this.props.bus)) {
            this.setState({
              openDialog: true,
            })
          }
          break;
        default:
          break;
      }
    } catch (e) {
      this.setState({
        error: e.message,
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

  handleDialogClose() {
    this.setState({
      openDialog: false,
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
          className={classes ? classes.textField : ''}
          error={!!this.state.error}
          helperText={this.state.error}
        />
        <Button variant="raised" color="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
        <ReportDialog
          open={this.state.openDialog}
          onClose={this.handleDialogClose}
          x={this.props.bus.x}
          y={this.props.bus.y}
          f={this.props.bus.f}
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
  bus: PropTypes.object,
}

Input.defaultProps = {
  bus: {},
}

export default withStyles(styles)(Input);

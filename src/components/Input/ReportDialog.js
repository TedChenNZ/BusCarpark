import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

class ReportDialog extends React.Component {
  render() {
    const { classes, onClose, x, y, f, ...other } = this.props;

    return (
      <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">{x},{y},{f}</DialogTitle>
      </Dialog>
    );
  }
}

ReportDialog.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default ReportDialog;
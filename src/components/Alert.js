import React, { Component } from "react";
import {
  Dialog,
  Button,
  DialogContentText,
  DialogActions,
  DialogContent
} from "../includes";
import { connect } from "react-redux";
import { alertClose } from "../includes/actions";
class Alert extends Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.props.alertClose(!this.props.alert.isAlert);
  };

  render() {
    const { isAlert, error, success } = this.props;
    return isAlert ? (
      <Dialog
        open={isAlert}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {error && error}
            {success && success}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Tamam
          </Button>
        </DialogActions>
      </Dialog>
    ) : null;
  }
}
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = {
  alertClose: alertClose
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);

import React, { Component } from "react";
import { alertClose } from "../../actions/alert-actions";
import MySnackbarContent from "./MySnackbarContent";
import { Snackbar } from "../../includes";
import { connect } from "react-redux";
class MySnackbar extends Component {
  handleClose = () => {
    this.props.alertClose(!this.props.isActive);
  };
  render() {
    const { isAlert, variant, message, anchorOrigin } = this.props;
    return (
      <Snackbar
        anchorOrigin={anchorOrigin}
        open={isAlert}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <MySnackbarContent
          onClose={this.handleClose}
          variant={variant}
          message={message}
        />
      </Snackbar>
    );
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
)(MySnackbar);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "../../includes";

class Dashboard extends Component {
  render() {
    return (
      <Typography variant="display1" gutterBottom component="h2">
        Anasayfa Elemanları
      </Typography>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

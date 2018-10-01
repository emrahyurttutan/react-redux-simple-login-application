import React, { Component } from "react";
import { User } from "../includes";
import WrapperTemplate from "./PageTemplate/WrapperTemplate";

const Wrapper = WrappedComponent => {
  return class extends Component {
    render() {
      if (User.isLogin()) {
        return (
          <WrapperTemplate {...this.props} user={User.getDataKey("userInfo")}>
            <WrappedComponent {...this.props} />
          </WrapperTemplate>
        );
      } else {
        this.props.history.push("/");
        return null;
      }
    }
  };
};
export default Wrapper;

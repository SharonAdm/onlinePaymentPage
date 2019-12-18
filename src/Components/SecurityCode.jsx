import React, { Component } from "react";
import "../style.css";
import { connect } from "react-redux";

class SecurityCode extends Component {
  render() {
    return (
      <input
        className="form-control"
        id="inputCVV"
        maxLength="4"
        name="securityCode"
        type="password"
        onChange={this.props.handelSecurityCodeChange}
        noValidate
      ></input>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handelSecurityCodeChange: event =>
      dispatch({
        type: "SECURITYCODECHANGE",
        value: event.target.value
      })
  };
};

export default connect(null, mapDispatchToProps)(SecurityCode);

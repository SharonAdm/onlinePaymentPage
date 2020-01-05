import React, { Component } from "react";
import "../style.css";
import { connect } from "react-redux";

class SecurityCode extends Component {
  render() {
    return (
      <input
        value={this.props.value.cvv2}
        className="form-control"
        id="inputCVV"
        maxLength="4"
        name="securityCode"
        type="password"
        onChange={this.props.handleSecurityCodeChange}
        noValidate
      ></input>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSecurityCodeChange: event =>
      dispatch({
        type: "SECURITYCODECHANGE",
        value: event.target.value,
        event: event
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecurityCode);

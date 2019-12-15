import React, { Component } from "react";
import "../style.css";

class SecurityCode extends Component {
  render() {
    return (
      <input
        className="form-control"
        id="inputCVV"
        maxLength="4"
        name="securityCode"
        type="password"
      ></input>
    );
  }
}

export default SecurityCode;

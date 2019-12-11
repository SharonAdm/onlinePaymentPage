import React, { Component } from "react";
import "../style.css";

class SecurityCode extends Component {
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="securityCode"> :CVV2</label>
            <input
              className="form-control"
              id="inputCVV"
              type="password"
              maxLength="4"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SecurityCode;

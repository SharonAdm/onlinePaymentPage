import React, { Component } from "react";
import "../style.css";

class Password extends Component {
  render() {
    return (
      <input
        className="form-control"
        id="inputPassword"
        minLength="5"
        maxLength="12"
        name="passsword"
        type="password"
      ></input>
    );
  }
}

export default Password;

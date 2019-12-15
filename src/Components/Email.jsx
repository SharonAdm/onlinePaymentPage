import React, { Component } from "react";
import "../style.css";

class Email extends Component {
  render() {
    return (
      <input
        className="form-control"
        id="inputEmail"
        name="email"
        placeholder="example@email.com"
        type="email"
      ></input>
    );
  }
}

export default Email;

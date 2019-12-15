import React, { Component } from "react";
import "../style.css";

class CardNumber extends Component {
  render() {
    return (
      <input
        className="form-control"
        id="inputCardNumber"
        maxLength="16"
        name="cardNumber"
        placeholder="xxxx - xxxx - xxxx - xxxx"
        type="text"
        noValidate
      ></input>
    );
  }
}

export default CardNumber;

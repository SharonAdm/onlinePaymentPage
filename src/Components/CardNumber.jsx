import React, { Component } from "react";
import "../style.css";

class CardNumber extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="cardNumber">:شماره کارت</label>
        <form className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              id="inputCardNumber"
              type="text"
              placeholder="xxxx"
              maxLength="4"
            ></input>
            <p>_</p>
            <input
              className="form-control"
              id="inputCardNumber"
              type="text"
              placeholder="xxxx"
              maxLength="4"
            ></input>
            <p>_</p>
            <input
              className="form-control"
              id="inputCardNumber"
              type="text"
              placeholder="xxxx"
              maxLength="4"
            ></input>
            <p>_</p>
            <input
              className="form-control"
              id="inputCardNumber"
              type="text"
              placeholder="xxxx"
              maxLength="4"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default CardNumber;

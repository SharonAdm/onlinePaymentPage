import React, { Component } from "react";
import "../style.css";

class Date extends Component {
  render() {
    return (
      <div id="test">
        <input
          className="form-control"
          id="inputMonth"
          maxLength="2"
          name="month"
          placeholder="ماه"
          type="text"
        ></input>
        <p id="seperator">_</p>
        <input
          className="form-control"
          id="inputYear"
          maxLength="2"
          name="year"
          placeholder="سال"
          type="text"
        ></input>
      </div>
    );
  }
}

export default Date;

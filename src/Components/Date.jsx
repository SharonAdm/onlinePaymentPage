import React, { Component } from "react";
import "../style.css";

class Date extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="email">: تاریخ انقضا کارت</label>
        <form className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              id="inputDate"
              type="text"
              maxLength="2"
              placeholder="سال"
            ></input>
            <p>_</p>
            <input
              className="form-control"
              id="inputDate"
              type="text"
              maxLength="2"
              placeholder="ماه"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Date;

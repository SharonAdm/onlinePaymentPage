import React, { Component } from "react";
import "../style.css";
import { connect } from "react-redux";

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
          onChange={this.props.handleMonthChange}
          noValidate
        ></input>
        <p id="seperator">_</p>
        <input
          className="form-control"
          id="inputYear"
          maxLength="2"
          name="year"
          placeholder="سال"
          type="text"
          onChange={this.props.handleYearChange}
          noValidate
        ></input>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleYearChange: event =>
      dispatch({ type: "YEARCHANGE", value: event.target.value }),
    handleMonthChange: event =>
      dispatch({ type: "MONTHCHANGE", value: event.target.value })
  };
};

export default connect(null, mapDispatchToProps)(Date);

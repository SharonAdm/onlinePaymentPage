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
          onChange={this.props.handelMonthChange}
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
          onChange={this.props.handelYearChange}
          noValidate
        ></input>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expDate: state.expDate,
    formErrors: state.formErrors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handelYearChange: event =>
      dispatch({ type: "YEARCHANGE", value: event.target.value }),
    handelMonthChange: event =>
      dispatch({ type: "MONTHCHANGE", value: event.target.value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Date);

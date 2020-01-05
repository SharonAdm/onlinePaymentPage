import React, { Component } from "react";
import "../style.css";
import { connect } from "react-redux";

class Date extends Component {
  render() {
    return (
      <React.Fragment>
        <input
          value={this.props.value.expMonth}
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
          value={this.props.value.expYear}
          className="form-control"
          id="inputYear"
          maxLength="2"
          name="year"
          placeholder="سال"
          type="text"
          onChange={this.props.handleYearChange}
          noValidate
        ></input>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleYearChange: event =>
      dispatch({ type: "YEARCHANGE", value: event.target.value, event: event }),
    handleMonthChange: event =>
      dispatch({ type: "MONTHCHANGE", value: event.target.value, event: event })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Date);

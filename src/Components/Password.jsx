import React, { Component } from "react";
import "../style.css";
import { connect } from "react-redux";

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
        onChange={this.props.handlePassChange}
        noValidate
      ></input>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlePassChange: event =>
      dispatch({ type: "PASSCHANGE", value: event.target.value, event: event })
  };
};

export default connect(null, mapDispatchToProps)(Password);

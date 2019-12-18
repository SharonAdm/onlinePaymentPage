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
        onChange={this.props.handelPassChange}
        noValidate
      ></input>
    );
  }
}

const mapStateToProps = state => {
  return {
    pass: state.pass,
    formErrors: state.formErrors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handelPassChange: event =>
      dispatch({ type: "PASSCHANGE", value: event.target.value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Password);

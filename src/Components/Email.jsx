import React, { Component } from "react";
import "../style.css";
import { connect } from "react-redux";

class Email extends Component {
  render() {
    return (
      <input
        value={this.props.value.emailAdd}
        className="form-control"
        id="inputEmail"
        name="email"
        placeholder="example@email.com"
        type="email"
        onChange={this.props.handleEmailChange}
        noValidate
      ></input>
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
    handleEmailChange: event =>
      dispatch({ type: "EMAILCHANGE", value: event.target.value, event: event })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Email);

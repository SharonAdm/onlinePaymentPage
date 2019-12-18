import React, { Component } from "react";
import "../style.css";
import { connect } from "react-redux";

class Email extends Component {
  render() {
    return (
      <input
        className="form-control"
        id="inputEmail"
        name="email"
        placeholder="example@email.com"
        type="email"
        onChange={this.props.handelEmailChange}
        noValidate
      ></input>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handelEmailChange: event =>
      dispatch({ type: "EMAILCHANGE", value: event.target.valye })
  };
};

export default connect(null, mapDispatchToProps)(Email);

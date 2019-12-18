import React, { Component } from "react";
import "../style.css";
import { connect } from "react-redux";

class CardNumber extends Component {
  render() {
    return (
      <input
        className="form-control"
        id="inputCardNumber"
        maxLength="16"
        name="cardNumber"
        placeholder="xxxx - xxxx - xxxx - xxxx"
        type="text"
        onChange={this.props.handelCardNoChange}
        noValidate
      ></input>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handelCardNoChange: event =>
      dispatch({ type: "CARDNOCHANGE", value: event.target.value })
  };
};

export default connect(null, mapDispatchToProps)(CardNumber);

import React, { Component } from "react";
import "../style.css";
import { connect } from "react-redux";
import InputMask from "react-input-mask";

class CardNumber extends Component {
  render() {
    return (
      <InputMask
        value={this.props.value.cardNo}
        className="form-control"
        id="inputCardNumber"
        name="cardNumber"
        mask="9999-9999-9999-9999"
        maskChar={null}
        placeholder="xxxx - xxxx - xxxx - xxxx"
        type="text"
        onChange={this.props.handleCardNoChange}
        noValidate
        required
      ></InputMask>
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
    handleCardNoChange: event =>
      dispatch({
        type: "CARDNOCHANGE",
        value: event.target.value,
        event: event
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardNumber);

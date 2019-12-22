import React, { Component } from "react";
import { connect } from "react-redux";
import "../style.css";

import Email from "./Email";
import CardNumber from "./CardNumber";
import Password from "./Password";
import SecurityCode from "./SecurityCode";
import Date from "./Date";


class Card extends Component {

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.props.handleSubmit} noValidate>
          <div className="form-group row">
            <label htmlFor="cardNumber" className="col-sm-2 col-form-label">
              شماره کارت:
            </label>
            <div className="col-sm-10">
              <CardNumber />
            </div>

            <label htmlFor="password" className="col-sm-2 col-form-label">
              رمز اینترنتی:
            </label>
            <div className="col-sm-10">
              <Password />
            </div>

            <label htmlFor="securityCode" className="col-sm-2 col-form-label">
              CVV2:
            </label>
            <div className="col-sm-10">
              <SecurityCode />
            </div>

            <label htmlFor="date" className="col-sm-2 col-form-label">
              تاریخ انقضا کارت:
            </label>
            <div className="col-sm-10">
              <Date />
            </div>

            <label htmlFor="email" className="col-sm-2 col-form-label">
              آدرس ایمیل (انتخابی):
            </label>
            <div className="col-sm-10">
              <Email />
            </div>

            <div className="col-lg-10">
              <button type="submit" className="btn btn-md btn-success">
                پرداخت
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (event) => dispatch({type: "SUBMIT", event: event })
  };
};

export default connect(null, mapDispatchToProps)(Card);

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
      <div className="wrapper">
        <form className="form" onSubmit={this.props.handleSubmit} noValidate>
          <div className="form-group row" id="formWrapper">
            <label htmlFor="cardNumber" className="col-sm-2 col-form-label">
              شماره کارت:
            </label>
            <div className="col-sm-10">
              <CardNumber />
              <div id="errorMessage">
                {this.props.errors !== undefined
                  ? this.props.errors.formErrors.cardNo
                  : ""}
              </div>
            </div>

            <label htmlFor="password" className="col-sm-2 col-form-label">
              رمز اینترنتی:
            </label>
            <div className="col-sm-10">
              <Password />
              <div id="errorMessage">
                {this.props.errors !== undefined
                  ? this.props.errors.formErrors.pass
                  : ""}
              </div>
            </div>

            <label htmlFor="securityCode" className="col-sm-2 col-form-label">
              CVV2:
            </label>
            <div className="col-sm-10">
              <SecurityCode />
              <div id="errorMessage">
                {this.props.errors !== undefined
                  ? this.props.errors.formErrors.cvv2
                  : ""}
              </div>
            </div>

            <label htmlFor="date" className="col-sm-2 col-form-label">
              تاریخ انقضا:
            </label>
            <div className="col-sm-10">
              <Date />
              <div id="errorMessage">
                <p>
                  {this.props.errors !== undefined
                    ? this.props.errors.formErrors.expYear
                    : ""}
                  <br />
                  {this.props.errors !== undefined
                    ? this.props.errors.formErrors.expMonth
                    : ""}
                </p>
              </div>
            </div>

            <label htmlFor="email" className="col-sm-2 col-form-label">
              آدرس ایمیل:
            </label>
            <div className="col-sm-10">
              <Email />
              <div id="errorMessage">
                {this.props.errors !== undefined
                  ? this.props.errors.formErrors.emailAdd
                  : ""}
              </div>
            </div>

            <div className="col-lg-10">
              <button
                type="submit"
                id="submitButton"
                className="btn btn-primary btn-block"
              >
                پرداخت
              </button>
              <button
                type="reset"
                id="deleteButton"
                className="btn btn-secondary btn-block"
                onClick={this.props.handleDelete}
              >
                حذف همه
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: event => dispatch({ type: "SUBMIT", event: event }),
    handleDelete: event => dispatch({ type: "DELETE", event: event })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

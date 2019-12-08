import React, { Component } from "react";
import "../style.css";

class Password extends Component {
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="form-group">
            <label for="password">:رمز دوم اینترنتی</label>
            <input
              className="form-control"
              id="inputPassword"
              type="password"
              minLength="5"
              maxLength="12"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Password;

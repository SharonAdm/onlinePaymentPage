import React, { Component } from "react";
import "../style.css";

class Email extends Component {
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="email">:آدرس پست الکترونیکی (اختیاری)</label>
            <input
              className="form-control"
              id="inputEmail"
              type="email"
              placeholder="example@email.com"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Email;

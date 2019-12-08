import React, { Component } from "react";
import "../style.css";

import Email from "./Email";
import CardNumber from "./CardNumber";
import Password from "./Password";
import SecurityCode from "./SecurityCode";
import Date from "./Date";

class Card extends Component {
  render() {
    return (
      <div>
        <CardNumber />
        <Password />
        <SecurityCode />
        <Date />
        <Email />
        <div className="col-lg-10">
          <button type="submit" class="btn btn-success">
            پرداخت
          </button>
        </div>
      </div>
    );
  }
}

export default Card;

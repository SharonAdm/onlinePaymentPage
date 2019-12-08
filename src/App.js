import React, { Component } from "react";
import Email from "./Components/Email";
import CardNumber from "./Components/CardNumber";
import Password from "./Components/Password";
import SecurityCode from "./Components/SecurityCode";
import Date from "./Components/Date";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardNumber />
        <Password />
        <SecurityCode />
        <Date />
        <Email />
      </div>
    );
  }
}

export default App;

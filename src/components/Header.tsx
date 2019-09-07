import React, { Component } from "react";
import CounterButton from "./CounterButton";

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h1>RoboFriends</h1>
        <CounterButton />
      </div>
    );
  }
}

export default Header;

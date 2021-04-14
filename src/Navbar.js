import React, { Component } from "react";
import logo from "./images/ironhack-logo.svg";
import menu from "./images/menu-top.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={logo} />
        <img src={menu} />
      </div>
    );
  }
}

export default Navbar;

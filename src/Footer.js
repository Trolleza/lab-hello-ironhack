import React, { Component } from "react";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

class Navbar extends Component {
  render() {
    return (
      <div class="footer">
        <div>
          <img src={icon1} />
          <h2 className="footer-txt">Declarative</h2>
          <p className="footer-txt">
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div>
          <img src={icon2} />
          <h2 className="footer-txt">Components</h2>
          <p className="footer-txt">
            Build encapsulated components that manage their state.
          </p>
        </div>
        <div>
          <img src={icon3} />
          <h2 className="footer-txt">Single-Way</h2>
          <p className="footer-txt">
            A set of immutable values are passed to the components.
          </p>
        </div>
        <div>
          <img src={icon4} />
          <h2 className="footer-txt">JSX</h2>
          <p className="footer-txt">
            Statically designed to run on modern browsers.
          </p>
        </div>
      </div>
    );
  }
}

export default Navbar;

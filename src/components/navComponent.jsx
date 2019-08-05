import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <Link to="/" className="my-0 mr-md-auto font-weight-normal logo">
          React code challenge
        </Link>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link to="/hello" className="p-2 text-dark">
            Hello
          </Link>
          <Link to="/counter" className="p-2 text-dark">
            Counter
          </Link>
        </nav>
      </div>
    );
  }
}

export default Nav;

import React, { Component } from "react";
import ReactDOM from "react-dom";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="headerDiv">
          {this.props.children}
        </div>
      </header>
    );
  }
}

export default Header;

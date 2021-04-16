import React, { Component } from 'react';
import ReactDOM from "react-dom";


export class Header extends Component {
    constructor(props){
      super(props);
    }
  
    render() {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  }

export default Header

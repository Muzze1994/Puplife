import React, { Component } from 'react';
import ReactDOM from "react-dom";

class HeaderButton extends Component {
    constructor(props){
      super(props);
    }
  
    render() {
      return (
        <button className ="btn green" onClick={this.props.onClick}>
          {this.props.children}
        </button>
      );
    }
  }

export default HeaderButton
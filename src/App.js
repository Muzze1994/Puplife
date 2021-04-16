//@ts-check

import React, { Component } from 'react';
import Header from './components/Header.js'
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import ReactDOM from "react-dom";
import HeaderButton from './components/HeaderButton.js';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'StartView'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(text) {
    this.setState({
      view: text
    })
  }
  render() {
    return (
      <div>
        <Header> 
          <HeaderButton onClick={() => this.handleClick("InformationView")} > Info </HeaderButton>
          <HeaderButton onClick={() => this.handleClick("MyProfileView")} > My Profile </HeaderButton>
          <HeaderButton onClick={() => this.handleClick("ForumView")} > Forum </HeaderButton>
          <HeaderButton onClick={() => this.handleClick("WebshopView")} > Webshop </HeaderButton>
        </Header>
        <Main view={this.state.view} />
        <Footer />
      </div>
    )
  }
}
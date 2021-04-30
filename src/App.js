//@ts-check

import React, { Component } from 'react';
import Footer from './components/Footer.js';
import ReactDOM from "react-dom";
import Information from './components/Information.js';
import MyProfile from './components/My-Profile.js';
import Forum from './components/Forum.js';
import Webshop from './components/Webshop.js';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export class App extends Component {
  constructor(props) {
    super(props);
    {
    }
  }

  render() {
    return (
      <div className="Content">
        <Router>

          <header>
            <Link to="/" className="btn green">Information</Link>

            <Link to="/forum" className="btn green">Forum</Link>

            <Link to="/myprofile" className="btn green">My Profile</Link>

            <Link to="/webshop" className="btn green">Webshop</Link>
          </header>

          <main>
            <Switch>

              <Route path="/forum">
                <Forum />
              </Route>
              <Route path="/myprofile">
                <MyProfile />
              </Route>
              <Route path="/webshop">
                <Webshop />
              </Route>
              <Route path="/">
                <Information />
              </Route>

            </Switch>
          </main>
        </Router>

        <Footer />
      </div>
    )
  }
}

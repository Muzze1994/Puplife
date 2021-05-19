//@ts-check

import React, { Component } from 'react';
import Footer from './components/Footer.js';
import ReactDOM from "react-dom";
import Information from './components/Information.js';
import MyProfile from './components/MyProfile/My-Profile.js';
import Forum from './components/Forum/Forum.js';
import Webshop from './components/Webshop.js';
import ForumDetail from './components/Forum/Forum-detail.js';
import Header from './components/Header.js';
import DogInformation from './components/MyProfile/Dog-information.js';
import { ThemeContext, themes } from './components/Context/Theme-context.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import ThemeTogglerButton from './components/Context/Theme-toggle-button.js';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export class App extends Component {
  constructor(props) {
    super(props);


    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }))

    }
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };

  }

  render() {
    return (
      <div className="Content">
        <Router>

          <Header appTitle={"PupLife"}>
            <Link to="/" className="btn green">Information</Link>

            <Link to="/forum" className="btn green">Forum</Link>

            <Link to="/myprofile" className="btn green">My Profile</Link>

            <Link to="/webshop" className="btn green">Webshop</Link>
          </Header>

          <main>
          <ThemeTogglerButton/>
            <Switch>
              <Route path="/forum">
                <ThemeContext.Provider value={this.state}>
                  <ErrorBoundary>
                    <Forum />
                  </ErrorBoundary>
                </ThemeContext.Provider>
              </Route>
              <Route path="/myprofile">
                <MyProfile />
              </Route>
              <Route path="/webshop">
                <Webshop />
              </Route>
              <Route
                path="/post/:id"
                component={ForumDetail} />
              <Route
                path="/dog/:dogName"
                component={DogInformation} />
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




//@ts-check

import React, { Component } from "react";
import Footer from "./components/Footer";
import ReactDOM from "react-dom";
import Information from "./components/Information/Information";
import MyProfile from "./components/MyProfile/My-Profile";
import Forum from "./components/Forum/Forum";
import Webshop from "./components/Webshop/Webshop";
import ForumDetail from "./components/Forum/Forum-detail";
import Header from "./components/Header";
import Main from "./components/Main";
import DogInformation from "./components/MyProfile/Dog-information";
import { NightModeContext } from "./components/Context/Theme-context";
import ErrorBoundary from "./components/ErrorBoundary";
import ThemeToggleButton from "./components/Context/Theme-toggle-button";
import ThemableDiv from "./components/Context/ThemableDiv";
import ThemableP from "./components/Context/ThemableP";
import ThemableH1 from "./components/Context/ThemableH1";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

ThemeToggleButton.contextType = NightModeContext;
ThemableDiv.contextType = NightModeContext;
ThemableP.contextType = NightModeContext;
ThemableH1.contextType = NightModeContext;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nightMode: false,
      dayOrNight: "Night mode",
    };

    this.handleChangeDayOrNight = this.handleChangeDayOrNight.bind(this);
  }

  handleChangeDayOrNight() {
    if (!this.state.nightMode) {
      this.setState({
        dayOrNight: "Day mode",
      });
    } else if (this.state.nightMode) {
      this.setState({
        dayOrNight: "Night mode",
      });
    }
  }

  handleChangeNightMode() {
    this.setState({
      nightMode: !this.state.nightMode,
    });
    this.handleChangeDayOrNight();
  }

  render() {
    console.log(this.state.dayOrNight);
    return (
      <ErrorBoundary>
        <NightModeContext.Provider
          value={{
            nightMode: this.state.nightMode,
            changeNightMode: this.handleChangeNightMode.bind(this),
          }}
        >
          <div className="Content">
            <ThemableDiv>
              <Router>
                <Header appTitle={"PupLife"}>
                  <ThemeToggleButton dayOrNight={this.state.dayOrNight} />
                </Header>

                <Main>
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
                    <Route path="/post/:id" component={ForumDetail} />
                    <Route path="/dog/:dogName" component={DogInformation} />
                    <Route path="/">
                      <Information />
                    </Route>
                  </Switch>
                </Main>

                <Footer>
                  <Link to="/" className="Footer-icon">
                    <i className="fas fa-info-circle fa-2x"></i>
                  </Link>

                  <Link to="/forum" className="Footer-icon">
                    <i className="far fa-comments fa-2x"></i>
                  </Link>

                  <Link to="/webshop" className="Footer-icon">
                    <i className="fas fa-store fa-2x"></i>
                  </Link>

                  <Link to="/myprofile" className="Footer-icon">
                    <i className="fas fa-dog fa-2x"></i>{" "}
                  </Link>
                </Footer>
              </Router>
            </ThemableDiv>
          </div>
        </NightModeContext.Provider>
      </ErrorBoundary>
    );
  }
}

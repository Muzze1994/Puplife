import React, { Component } from "react";
import ThemableH1 from "../Context/ThemableH1";

class DogInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="DogInfo">
        <ThemableH1>
          Information about {this.props.match.params.dogName}
        </ThemableH1>
        <img className="AkillesPic" src={require('../../../img/Akilles.jpeg')}></img>
      </div>
    );
  }
}

export default DogInformation;

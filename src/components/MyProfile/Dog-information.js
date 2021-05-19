import React, { Component } from 'react';
import DropDownContent from './Drop-drop-down-content';
import MyDogView from './My-dog-view';

class DogInformation extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount()
    {

    }

    render() {

        return (
            <div className="DogInfo">
                <h1>Information about {this.props.match.params.dogName}</h1>
            </div>
        )
    }
}

export default DogInformation
import React, { Component } from 'react';
import MyDogView from './My-dog-view';
import PropTypes from 'prop-types';

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
import React, { Component } from 'react';
import Login from '../Login.js';
import MyDogs from './My-dog-view.js';
import DogInformation from './Dog-information.js';
import ErrorBoundary from '../ErrorBoundary.js';
import MyDogView from './My-dog-view.js';
import PropTypes from 'prop-types';

class MyProfile extends Component {
constructor(props){
    super(props);
    this.state = {
        dogName: ['Akilles', 'Apollo', 'Kiko']
    }
}
    render() {

        const DogName = this.state.dogName;
        return (
            <div>
                <Login />
                <ErrorBoundary>
                    <MyDogView dogName={DogName}/>
                </ErrorBoundary>
            </div>
        )
    }
}

MyProfile.propTypes = {
    dogName: PropTypes.array
}

export default MyProfile


import React, { Component } from 'react';
import Login from '../Login';
import MyDogView from './My-dog-view';
import PropTypes from 'prop-types';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogName: ['Akilles', 'Apollo', 'Kiko']
        }
    }
    render() {

        const DogName = this.state.dogName;

        if (localStorage.length > 0) {
            return (
                <div>
                    <Login />
                        <MyDogView dogName={DogName} />
                </div>
            )
        }
        else {
            return (
                <Login message={"Log in to see your profile"} />
            )
        }
    }
}

MyProfile.propTypes = {
    dogName: PropTypes.array,
    message: PropTypes.string
}

export default MyProfile


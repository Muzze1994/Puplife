import React, { Component } from 'react';
import ConfirmationBtn from './Confirmation-button.js';

class LoginGreeting extends Component {

    constructor(props) {
        super(props);
    }

    clearLocalStorage() {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        return (
            <div className="LoginDiv">
                <h1>Welcome {this.props.user}</h1>
                <ConfirmationBtn message={"Log out"} handleClick={this.clearLocalStorage} dialogTitle={"Log out"} dialogDescr={"Are you sure?"}/>
            </div>
        )
    }
}

export default LoginGreeting
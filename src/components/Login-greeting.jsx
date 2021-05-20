import React, { Component } from 'react';
import ConfirmationBtn from './Confirmation-button';
import ThemableH1 from './Context/ThemableH1';

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
            <div className="LogOutDiv">
                <ThemableH1>Welcome {this.props.user}</ThemableH1>
                <ConfirmationBtn message={"Log out"} myFunction={this.clearLocalStorage} dialogTitle={"Log out"} dialogDescr={"Are you sure?"}/>
            </div>
        )
    }
}

export default LoginGreeting
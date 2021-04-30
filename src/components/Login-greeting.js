import React, { Component } from 'react';

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
                <button onClick={this.clearLocalStorage}>Log out</button>
            </div>
        )
    }
}

export default LoginGreeting
import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoginGreeting from './Login-greeting.js';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(e) {
        if (this.state.value != '') {
            console.log('A name was submitted: ' + this.state.value);
            localStorage.setItem('user', this.state.value);
        }
        else {
            alert("Please write your name");
        }
    }
    componentDidMount() {
        const localStorageUser = localStorage.getItem('user');
        this.setState({ localStorageState: localStorageUser });
    }

    render() {
        const user = localStorage.getItem('user');

        if (user == null) {
            return (
                <div className="LoginDiv">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Username:
            <input name="user" value={this.state.user} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Create account name" />
                    </form>
                </div>

            );
        }
        else {
            return (
                <LoginGreeting user={user} />
            )
        }

    }
}

export default Login
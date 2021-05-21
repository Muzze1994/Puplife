import React, { Component } from "react";
import ReactDOM from "react-dom";
import ThemableH1 from "./Context/ThemableH1";
import ThemableP from "./Context/ThemableP";
import LoginGreeting from './Login-greeting';
import PropTypes from 'prop-types';

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
                    <ThemableH1>{this.props.message}</ThemableH1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <ThemableP>Username:</ThemableP>
            <input name="user" value={this.state.user} onChange={this.handleChange} />
                        </label>
                        <input className="LoginInput" type="submit" value="Create account name" />
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

Login.propTypes = {
    message: PropTypes.string.required
}

export default Login
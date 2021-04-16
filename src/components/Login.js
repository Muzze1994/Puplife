import React, { Component } from "react";
import ReactDOM from "react-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    clearLocalStorage() {
        localStorage.clear();
        window.location.reload();
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
        if (localStorage.getItem('user') !== null) {
            return (
                <div>
                    <h1>Welcome {this.state.localStorageState}</h1>
                    <button onClick={this.clearLocalStorage}>Log out</button>
                </div>
            )
        }
        else
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
            <input name="user" value={this.state.user} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Create account name" />
                </form>
            );
    }
}

export default Login
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from './Login.js';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.view == "InformationView") {
            return (
                <main>
                    <div>
                        <p>du tryckte på Info</p>
                    </div>
                </main>
            );
        }

        else if (this.props.view == "ForumView") {
            return (
                <main>
                    <div>
                        <p>du tryckte på Forum</p>
                    </div>
                </main>
            )
        }

        else if (this.props.view == "MyProfileView") {
            return (
                <main>
                    <div>
                        <p>du tryckte på My Profile</p>

                    </div>
                    <div>
                        <Login />
                    </div>
                </main>
            )
        }

        else if (this.props.view == "WebshopView") {
            return (
                <main>
                    <div>
                        <p>du tryckte på Webshop</p>
                    </div>
                </main>
            )

        }
        return (
            <div><p> 404 {this.props.view} finns ej</p></div>
        )
    }
}

export default Main


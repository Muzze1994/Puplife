import React, { Component } from "react";
import ReactDOM from "react-dom";


class Main extends Component {
    render() {
        return (
            <main className="main">
                <div className="mainDiv">
                    {this.props.children}
                </div>
            </main >
        )
    }
}

export default Main
import React, { Component } from "react";
import ReactDOM from "react-dom";


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footerDiv">
                    {this.props.children}
                </div>
            </footer >
        )
    }
}

export default Footer
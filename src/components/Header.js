import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="appTitle">
                    <h1>{this.props.appTitle}</h1>
                </div>
                <div>
                    {this.props.children}
                </div>

            </header>
        )
    }
}

Header.propTypes = {
    appTitle: PropTypes.string
}

export default Header
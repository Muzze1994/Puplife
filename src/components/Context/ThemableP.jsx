import React, { Component } from 'react';


class ThemableP extends Component {

    render() {
        return (
                <p style={{color: this.context.nightMode ? "white" : "black"}}>{this.props.children}</p>
        )
    }
}

export default ThemableP;
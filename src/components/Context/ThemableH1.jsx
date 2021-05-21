import React, { Component } from 'react';

class ThemableH1 extends Component {

    render() {
        return (
                <h1 style={{color: this.context.nightMode ? "white" : "black"}}>{this.props.children}</h1>
        )
    }
}


export default ThemableH1;
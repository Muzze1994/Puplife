import React, { Component } from 'react';

class ThemableDiv extends Component {

    render() {
        return (
                <div className="themableDiv" style={{background: this.context.nightMode ? "black" : "white"}}>{this.props.children}</div>
        )
    }
}


export default ThemableDiv;
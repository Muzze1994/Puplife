import React, { Component } from 'react';

class ThemableDiv extends Component {

    render() {
        return (
                <div className="themableDiv" style={{background: this.context.nightMode ? "#15202B" : "#F5F5F5"}}>{this.props.children}</div>
        )
    }
}


export default ThemableDiv;
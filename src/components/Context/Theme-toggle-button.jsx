import React, { Component,createContext } from 'react';

class ThemeToggleButton extends Component {

    render() {

        console.log(this.context, this.props.name, this.context.dayOrNight, this.props.dayOrNight)
        return (
                <button onClick={this.context.changeNightMode}>{this.props.dayOrNight}</button>
        )
    }
}

export default ThemeToggleButton;
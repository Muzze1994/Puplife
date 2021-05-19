import React from 'react';
import { ThemeContext } from './theme-context';

function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme}
                    style={{ backgroundColor: theme.background }}>
                    <p style={{color: "white"}}>Toggle Theme</p>
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;
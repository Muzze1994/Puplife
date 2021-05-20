import React, {Component, createContext} from 'react'


export const NightModeContext = createContext({
    nightMode: false,
    changeNightMode: undefined // () => void
});

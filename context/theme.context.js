import React, { createContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children,pages})=>{
    
    return(
        <ThemeContext.Provider value={true}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;
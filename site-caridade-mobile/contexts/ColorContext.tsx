
import { createContext, ReactNode, useEffect, useState } from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export const ColorsContext = createContext({} as ColorsContextData);

interface ColorsProviderProps {
    children: ReactNode;
}

interface ColorsContextData {
    darkMode: boolean,
    changeDarkMode: ()=>void,
    black: String,
    white: String,
    red: String,
}

export function ColorsProvider({
    children,
    ...rest
}: ColorsProviderProps) {

    const [darkMode, setDarkMode] = useState(false)

    function changeDarkMode(){
        setDarkMode(!darkMode)
    }

    var Color = {
        black: '#0C0C0C',
        white: '#FAF7FF',
        red: '#FF4E68'
    }

    if(darkMode){
        Color = {
            black: '#FAF7FF',
            white: '#0C0C0C',
            red:'#FF4E68'
        }
    }

    return (
        <ColorsContext.Provider value={{
            darkMode,
            changeDarkMode,
            ...Color
        }}>
            {
                (darkMode)?
                <StatusBar translucent style="light"/>:
                <StatusBar translucent style="dark"/>
            }
            {children}

        </ColorsContext.Provider>
    )
}
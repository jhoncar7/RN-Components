import React, { createContext, useEffect, useReducer } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, themeReducer, ThemeState, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    const colorScheme = useColorScheme();// esto devuelve "light" - "dark" - null - undefined lo toma del SO

    const [theme, dispatch] = useReducer(themeReducer, (colorScheme === "dark" ? darkTheme : lightTheme));

    useEffect(() => {
        (colorScheme === 'light')
            ? setLightTheme()
            : setDarkTheme();
    }, [colorScheme]);

    const setDarkTheme = () => {
        dispatch({ type: "set_dark_theme" });
        console.log('setDarkTheme');
    }
    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
        console.log('setLightTheme');
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
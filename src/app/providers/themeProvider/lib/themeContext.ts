import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    CYBERPUNK = 'cyberpunk'
}

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    setTheme: (theme: Theme) => console.log(theme)
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

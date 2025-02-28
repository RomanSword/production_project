import { useState } from 'react';

import { FCCP } from 'app/types/declarations';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/themeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface IThemeProvider {
    themeName?: Theme;
}

const ThemeProvider: FCCP<IThemeProvider> = ({ children, themeName = defaultTheme }) => {
    const [theme, setTheme] = useState<Theme>(themeName);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

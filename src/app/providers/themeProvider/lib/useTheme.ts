import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newValue = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

        setTheme(newValue);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newValue);
    };

    return { theme, toggleTheme };
}

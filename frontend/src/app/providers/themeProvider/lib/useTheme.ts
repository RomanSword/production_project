import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newValue = Theme.LIGHT;

        if (theme === Theme.LIGHT) {
            newValue = Theme.CYBERPUNK;
        } else if (theme === Theme.CYBERPUNK) {
            newValue = Theme.DARK;
        } else if (theme === Theme.DARK) {
            newValue = Theme.LIGHT;
        }

        setTheme(newValue);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newValue);
    };

    return { theme, toggleTheme };
}

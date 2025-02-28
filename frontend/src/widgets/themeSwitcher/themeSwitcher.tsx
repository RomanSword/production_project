import { ReactElement, memo } from 'react';

import { Theme, useTheme } from 'app/providers/themeProvider';

import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';

import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import CyberPunkIcon from 'shared/assets/icons/cyberpunk_icon.svg';

import cls from './themeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const icons = {
    [Theme.DARK]: <MoonIcon />,
    [Theme.LIGHT]: <SunIcon />,
    [Theme.CYBERPUNK]: <CyberPunkIcon />
};

export const ThemeSwitcher = memo(function ThemeSwitcher({
    className
}: ThemeSwitcherProps): ReactElement {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            data-testid='theme-switcher'
            onClick={toggleTheme}
            className={classNames([cls.themeSwitcher, className])}
        >
            {icons[theme]}
        </Button>
    );
});

import { classNames } from 'shared/lib/classNames';
import { AppLinkTheme } from 'shared/ui/appLink/appLink';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { AppLink } from 'shared/ui';

import cls from './navBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({
    className
}: NavBarProps) => {
    return (
        <div className={classNames([cls.navBar, className])}>
            <ThemeSwitcher />

            <div className={cls.links}>
                <AppLink
                    to='/'
                    theme={AppLinkTheme.SECONDARY}
                >
                    Main
                </AppLink>
                <AppLink
                    to='/about'
                    theme={AppLinkTheme.SECONDARY}
                >
                    About
                </AppLink>
            </div>
        </div>
    );
}

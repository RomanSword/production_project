import { ReactElement } from 'react';

import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'widgets/themeSwitcher/themeSwitcher';
import { LanguageSwitcher } from 'widgets/languageSwitcher/languageSwitcher';
import { LoginModalButton } from 'features';

import LogoImage from 'shared/assets/images/logo.svg';

import cls from './navBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps): ReactElement => {
    return (
        <div className={classNames([cls.navBar, className])}>
            <div className={cls.logo}>
                <LogoImage />
            </div>

            <div className={cls.innerBlock}>
                <LoginModalButton />
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};

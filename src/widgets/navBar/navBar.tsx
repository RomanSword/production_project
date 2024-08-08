import { ReactElement, memo } from 'react';
import { useSelector } from 'react-redux';

import { getUsername } from 'entities/user';
import { LoginModalButton } from 'features/loginByUsername';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'widgets/themeSwitcher/themeSwitcher';
import { LanguageSwitcher } from 'widgets/languageSwitcher/languageSwitcher';
import { UserMenu } from 'widgets/userMenu/userMenu';

import LogoImage from 'shared/assets/images/logo.svg';

import cls from './navBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = memo(({ className }: NavBarProps): ReactElement => {
    const username = useSelector(getUsername);

    return (
        <div className={classNames([cls.navBar, className])}>
            <div className={cls.logo}>
                <LogoImage />
            </div>

            <div className={cls.innerBlock}>
                {username ? <UserMenu /> : <LoginModalButton />}
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
});

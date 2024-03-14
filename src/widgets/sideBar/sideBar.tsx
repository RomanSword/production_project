import { ReactElement, useState } from 'react';

import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'widgets/themeSwitcher/themeSwitcher';
import { LanguageSwitcher } from 'widgets/languageSwitcher/languageSwitcher';

import ForwardIcon from 'shared/assets/icons/forward.svg';

import cls from './sideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps): ReactElement => {
    const [collapsed, setCollapsed] = useState(false);

    const onClickTest = (): void => {
        setCollapsed(prevValue => !prevValue);
    };

    return (
        <div
            data-testid='sideBar'
            className={classNames([cls.sideBar, className, collapsed && cls.collapsed])}
        >
            <Button
                data-testid='sideBar-toggle'
                onClick={onClickTest}
                className={classNames([
                    cls.toggleButton,
                    collapsed && cls.toggleButtonIconInverted
                ])}
            >
                <ForwardIcon />
            </Button>

            <div className={classNames([cls.switchers, collapsed && cls.switchersVertical])}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};

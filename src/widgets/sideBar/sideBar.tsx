import { ReactElement, useState } from 'react';

import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';
import { LanguageSwitcher, ThemeSwitcher } from 'widgets';

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
        <div className={classNames([cls.sideBar, className, collapsed && cls.collapsed])}>
            <Button onClick={onClickTest}>Toggle</Button>

            <div className={cls.switchers}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};

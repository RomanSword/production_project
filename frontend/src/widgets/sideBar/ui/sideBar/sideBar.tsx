import { ReactElement, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';

import ForwardIcon from 'shared/assets/icons/forward.svg';

import { SideBarItem } from '../sideBarItem/sideBarItem';
import { sideBarItems } from '../../model/items';

import cls from './sideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(function SideBar({ className }: SideBarProps): ReactElement {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onClickTest = (): void => {
        setCollapsed(prevValue => !prevValue);
    };

    return (
        <div
            data-testid='sideBar'
            className={classNames([cls.sideBar, className, collapsed && cls.collapsed])}
        >
            <div className={cls.links}>
                {sideBarItems.map(item => {
                    return (
                        <SideBarItem
                            {...item}
                            key={item.text}
                            text={t(item.text)}
                            collapsed={collapsed}
                        />
                    );
                })}
            </div>

            <div className={cls.buttons}>
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
            </div>
        </div>
    );
});

import { ReactElement, memo } from 'react';

import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';

import { SideBarItemType } from '../../model/items';

import cls from './sideBarItem.module.scss';

export const SideBarItem = memo(function SideBarItem(props: SideBarItemType): ReactElement {
    const { path, RouteIcon, text, collapsed = false } = props;

    return (
        <AppLink
            to={path}
            className={classNames([cls.link, collapsed && cls.collapsed])}
            theme={AppLinkTheme.SECONDARY}
        >
            <RouteIcon />
            <span className={cls.linkText}>{text}</span>
        </AppLink>
    );
});

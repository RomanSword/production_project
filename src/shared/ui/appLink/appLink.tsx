import { ReactElement, memo } from 'react';
import { NavLink, LinkProps } from 'react-router-dom';

import { FCCP } from 'app/types/declarations';
import { classNames } from 'shared/lib';

import cls from './appLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FCCP<AppLinkProps> = memo((props): ReactElement => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <NavLink
            to={to}
            className={classNames([cls.appLink, className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});

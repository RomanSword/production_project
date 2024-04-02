import { ButtonHTMLAttributes, ReactElement } from 'react';

import { FCCP } from 'app/types/declarations';
import { classNames } from 'shared/lib';

import cls from './button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    className?: string;
}

export const Button: FCCP<ButtonProps> = ({
    theme,
    className,
    children,
    ...otherProps
}): ReactElement => {
    return (
        <button
            {...otherProps}
            type='button'
            className={classNames([cls.button, cls[theme] ?? cls[theme], className])}
        >
            {children}
        </button>
    );
};

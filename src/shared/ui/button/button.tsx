import { ButtonHTMLAttributes, ReactElement } from 'react';

import { FCCP } from 'app/types/declarations';
import { classNames } from 'shared/lib';

import cls from './button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FCCP<ButtonProps> = ({
    className,
    theme,
    children,
    ...otherProps
}): ReactElement => {
    return (
        <button
            {...otherProps}
            type='button'
            className={classNames([cls.button, cls[theme], className])}
        >
            {children}
        </button>
    );
};

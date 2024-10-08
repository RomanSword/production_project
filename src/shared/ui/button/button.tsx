import { ButtonHTMLAttributes, ReactElement, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { FCCP } from 'app/types/declarations';
import { classNames } from 'shared/lib';

import cls from './button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_DANGER = 'outline_danger'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    isDisabled?: boolean;
    isLoading?: boolean;
    className?: string;
}

export const Button: FCCP<ButtonProps> = memo(function Button(props): ReactElement {
    const {
        theme = ButtonTheme.PRIMARY,
        isDisabled = false,
        isLoading = false,
        className,
        children,
        ...otherProps
    } = props;

    const { t } = useTranslation();

    if (!otherProps.onClick) {
        <div className={classNames([cls.button, cls[theme] ?? cls[theme], className])}>
            {isLoading ? `${t('loading')}...` : children}
        </div>;
    }

    return (
        <button
            {...otherProps}
            type='button'
            disabled={isLoading || isDisabled}
            className={classNames([cls.button, cls[theme] ?? cls[theme], className])}
        >
            {isLoading ? `${t('loading')}...` : children}
        </button>
    );
});

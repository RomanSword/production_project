import { ReactElement } from 'react';

import { classNames } from 'shared/lib';

import cls from './spinner.module.scss';

export enum SpinnerAppearance {
    THEMED = 'themed',
    ALWAYS_BLACK = 'alwaysBlack'
}

export enum SpinnerSize {
    MEDIUM = 'medium',
    SMALL = 'small'
}

interface SpinnerProps {
    appearance?: SpinnerAppearance;
    size?: SpinnerSize;
    className?: string;
}

export const Spinner = (props: SpinnerProps): ReactElement => {
    const {
        appearance = SpinnerAppearance.THEMED,
        size = SpinnerSize.MEDIUM,
        className = ''
    } = props;

    return (
        <span
            className={classNames([cls.container, className])}
            data-appearance={appearance}
            data-size={size}
        ></span>
    );
};

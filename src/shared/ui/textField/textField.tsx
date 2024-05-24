import { ReactElement, HTMLInputTypeAttribute, ChangeEvent } from 'react';

import { FCCP } from 'app/types/declarations';
import { classNames } from 'shared/lib';

import cls from './textField.module.scss';

interface TextFieldProps {
    id: string;
    name: string;
    label: string;
    type?: HTMLInputTypeAttribute;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    touched?: boolean;
    error?: string;
}

export const TextField: FCCP<TextFieldProps> = (props): ReactElement => {
    const {
        id,
        name,
        label,
        type = 'text',
        value = '',
        onChange = () => {},
        className = '',
        touched = false,
        error = ''
    } = props;

    const isErrorExist = touched && !!error;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <label
            className={classNames([cls.container, className])}
            htmlFor={id || name}
        >
            <span
                className={cls.label}
                data-error={isErrorExist}
            >
                {label}
            </span>

            <input
                id={id || name}
                data-error={isErrorExist}
                value={value}
                type={type}
                className={cls.input}
                onChange={handleOnChange}
            />

            <div className={cls.error}>{isErrorExist ? error : ''}</div>
        </label>
    );
};

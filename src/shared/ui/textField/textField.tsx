import { ReactElement, HTMLInputTypeAttribute, ChangeEvent, memo } from 'react';

import { classNames } from 'shared/lib';

import cls from './textField.module.scss';

interface TextFieldProps {
    id: string;
    name: string;
    label: string;
    autoComplete?: string;
    autoFocus?: boolean;
    testId?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | number;
    onChange?: (value: string) => void;
    className?: string;
    touched?: boolean;
    readonly?: boolean;
    error?: string;
}

export const TextField = memo(function TextField(props: TextFieldProps): ReactElement {
    const {
        id,
        name,
        label,
        testId,
        autoComplete,
        autoFocus = false,
        type = 'text',
        value = '',
        onChange = () => {},
        className = '',
        touched = false,
        readonly = false,
        error = ''
    } = props;

    const isErrorExist = touched && !!error;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <label
            htmlFor={id || name}
            data-testid={testId || id}
            className={classNames([cls.container, className])}
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
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                disabled={readonly}
            />

            <div className={cls.error}>{isErrorExist ? error : ''}</div>
        </label>
    );
});

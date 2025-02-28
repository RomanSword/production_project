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
    isRequired?: boolean;
    isTextArea?: boolean;
    onChange?: (value: string) => void;
    className?: string;
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
        isRequired = false,
        isTextArea = false,
        onChange = () => {},
        className = '',
        readonly = false,
        error = ''
    } = props;

    const isErrorExist = !!error;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    return (
        <label
            htmlFor={id || name}
            data-testid={testId || id}
            data-type={isTextArea ? 'textarea' : 'input'}
            className={classNames([cls.container, className])}
        >
            <span
                className={cls.label}
                data-error={isErrorExist}
            >
                {label}

                {!readonly && isRequired && <span className={cls.requiredSymbol}>*</span>}
            </span>

            {isTextArea ? (
                <textarea
                    id={id || name}
                    data-error={isErrorExist}
                    value={value}
                    className={cls.field}
                    onChange={handleOnChange}
                    autoFocus={autoFocus}
                    disabled={readonly}
                />
            ) : (
                <input
                    id={id || name}
                    data-error={isErrorExist}
                    value={value}
                    type={type}
                    className={cls.field}
                    onChange={handleOnChange}
                    autoFocus={autoFocus}
                    autoComplete={autoComplete}
                    disabled={readonly}
                />
            )}

            <div className={cls.error}>{isErrorExist ? error : ''}</div>
        </label>
    );
});

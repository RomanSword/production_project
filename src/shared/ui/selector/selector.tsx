import { ReactElement, MouseEvent, useState, useEffect, memo } from 'react';

import { classNames } from 'shared/lib';

import ArrowUp from 'shared/assets/icons/arrow-up.svg';
import ArrowDown from 'shared/assets/icons/arrow-down.svg';

import cls from './selector.module.scss';

interface DropdownOptionsProps {
    id: string | number;
    text: string;
}

interface SelectorProps {
    label: string;
    options: DropdownOptionsProps[];
    error?: string;
    placeholder?: string;
    selectedId?: string;
    onOptionClick?: (id: string) => void;
    isOpened?: boolean;
    readOnly?: boolean;
    className?: string;
}

export const Selector = memo((props: SelectorProps): ReactElement => {
    const {
        label,
        options,
        error,
        placeholder,
        selectedId,
        onOptionClick,
        isOpened = false,
        readOnly = false,
        className = ''
    } = props;

    const [isOpen, setIsOpen] = useState(isOpened);

    const closeDropDownMenu = () => {
        setIsOpen(false);
        document.onclick = null;
        document.onkeydown = null;
    };

    useEffect(() => {
        return closeDropDownMenu;
    }, []);

    const onDocumentKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            closeDropDownMenu();
        }
    };

    const onDocumentClick = (): void => {
        closeDropDownMenu();
    };

    const onClickButton = (event: MouseEvent<HTMLDivElement>): void => {
        event.stopPropagation();

        if (readOnly) {
            return;
        }

        setIsOpen(!isOpen);

        document.onkeydown = onDocumentKeyDown;
        document.onclick = onDocumentClick;
    };

    const onOptionsClick = (event: MouseEvent<HTMLUListElement>): void => {
        event.stopPropagation();

        if (!onOptionClick) {
            return;
        }

        const value = (event.target as HTMLInputElement).getAttribute('data-id');

        if (value) {
            onOptionClick(value);
            closeDropDownMenu();
        }
    };

    let value = placeholder;
    const selectedOption = options.find(item => item.id === selectedId);

    if (selectedOption) {
        value = selectedOption.text;
    }

    const isErrorExist = !!error;

    return (
        <div className={classNames([cls.container, className])}>
            <div
                className={cls.innerContainer}
                onClick={onClickButton}
                data-error={isErrorExist}
                data-readonly={readOnly}
            >
                <span
                    className={cls.label}
                    data-error={isErrorExist}
                >
                    {label}

                    {readOnly ? <></> : isOpen ? <ArrowUp /> : <ArrowDown />}
                </span>

                <span className={cls.value}>{value}</span>
            </div>

            {isOpen && (
                <ul
                    className={cls.options}
                    onClick={onOptionsClick}
                >
                    {options.map(option => (
                        <li
                            key={option.id}
                            data-id={option.id}
                            className={cls.option}
                        >
                            {option.text}
                        </li>
                    ))}
                </ul>
            )}

            <div className={cls.error}>{isErrorExist ? error : ''}</div>
        </div>
    );
});

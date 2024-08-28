import { ReactElement, MouseEvent, useState, useEffect, memo } from 'react';

import { Spinner } from 'shared/ui';
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
    selectedText?: string;
    onOptionClick?: (item: string) => void;
    isOpened?: boolean;
    isLoading?: boolean;
    readonly?: boolean;
    className?: string;
}

export const Selector = memo(function Selector(props: SelectorProps): ReactElement {
    const {
        label,
        options,
        error,
        placeholder,
        selectedId,
        selectedText,
        onOptionClick,
        isOpened = false,
        isLoading = false,
        readonly = false,
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

        if (readonly) {
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

    const isErrorExist = !!error;
    const selectedOption = options.find(item => item.id === selectedId);

    let value = placeholder;

    if (selectedText) {
        value = selectedText;
    } else if (selectedOption) {
        value = selectedOption.text;
    }

    return (
        <div className={classNames([cls.container, className])}>
            <div
                className={cls.innerContainer}
                onClick={onClickButton}
                data-error={isErrorExist}
                data-readonly={readonly}
            >
                <span
                    className={cls.label}
                    data-error={isErrorExist}
                >
                    {label}

                    {readonly ? <></> : isOpen ? <ArrowUp /> : <ArrowDown />}
                </span>

                <span className={cls.value}>{value}</span>
            </div>

            {isOpen && (
                <ul
                    className={cls.options}
                    onClick={onOptionsClick}
                >
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        options.map(option => (
                            <li
                                key={option.id}
                                data-id={option.id}
                                data-is-selected={option.id === selectedId}
                                className={cls.option}
                            >
                                {option.text}
                            </li>
                        ))
                    )}
                </ul>
            )}

            <div className={cls.error}>{isErrorExist ? error : ''}</div>
        </div>
    );
});

import { ReactElement, MouseEvent, useState, useEffect, memo } from 'react';

import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';

import cls from './dropdownButton.module.scss';

interface DropdownOptionsProps {
    id: string;
    text: string;
}

interface DropdownButtonProps {
    buttonText: string;
    options: DropdownOptionsProps[];
    onOptionClick?: (id: string) => void;
    isOpened?: boolean;
    testId?: string;
    className?: string;
}

export const DropdownButton = memo((props: DropdownButtonProps): ReactElement => {
    const {
        buttonText,
        options,
        onOptionClick,
        isOpened = false,
        testId = 'dropdown-button',
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

    const onClickButton = (event: MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation();

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

    return (
        <div className={classNames([cls.container, className])}>
            <Button
                data-testid={testId}
                className={cls.button}
                onClick={onClickButton}
            >
                {buttonText}
            </Button>

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
        </div>
    );
});

import { ReactElement, useEffect } from 'react';

import { FCCP } from 'app/types/declarations';
import { classNames } from 'shared/lib';
import CloseIcon from 'shared/assets/icons/close.svg';

import cls from './modal.module.scss';

interface PortalProps {
    onClose?: () => void;
    className?: string;
}

export const Modal: FCCP<PortalProps> = ({
    children,
    onClose = () => {},
    className = ''
}): ReactElement => {
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.onkeydown = onKeyDown;

        return () => {
            document.onkeydown = null;
        };
    }, [onClose]);

    const onContentClick = (event: React.MouseEvent): void => {
        event.stopPropagation();
    };

    const onCloseClick = (event: React.MouseEvent): void => {
        event.stopPropagation();

        onClose();
    };

    return (
        <div
            onClick={onClose}
            className={classNames([cls.container, className])}
        >
            <div className={cls.contentWrapper}>
                <div
                    onClick={onContentClick}
                    className={cls.content}
                >
                    {children}
                </div>

                <div
                    onClick={onCloseClick}
                    className={cls.closeButton}
                >
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
};

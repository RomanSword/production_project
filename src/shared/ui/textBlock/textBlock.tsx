import { ReactElement } from 'react';

import { classNames } from 'shared/lib';

import cls from './textBlock.module.scss';

export enum TextBlockType {
    TITLE = 'title',
    TEXT = 'text',
    ERROR = 'error'
}

interface TextBlockProps {
    type?: TextBlockType;
    text?: string;
    className?: string;
}

export const TextBlock = ({
    type = TextBlockType.TEXT,
    text = '',
    className
}: TextBlockProps): ReactElement => {
    if (!text) {
        return <div className={classNames([cls.container, className])} />;
    }

    return (
        <div className={classNames([cls.container, cls[type] ?? cls[type], className])}>{text}</div>
    );
};

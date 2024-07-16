import { ReactElement, memo } from 'react';

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

export const TextBlock = memo((props: TextBlockProps): ReactElement => {
    const { type = TextBlockType.TEXT, text = '', className } = props;

    if (!text) {
        return <div className={classNames([cls.container, className])} />;
    }

    return (
        <div className={classNames([cls.container, cls[type] ?? cls[type], className])}>{text}</div>
    );
});

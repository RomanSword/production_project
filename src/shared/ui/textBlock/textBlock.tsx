import { ReactElement, memo } from 'react';

import { classNames } from 'shared/lib';

import cls from './textBlock.module.scss';

export enum TextBlockType {
    TITLE = 'title',
    TEXT = 'text',
    ERROR = 'error'
}

export enum TextBlockAlign {
    LEFT = 'alignLeft',
    RIGHT = 'alignRight',
    CENTER = 'alignCenter'
}

interface TextBlockProps {
    type?: TextBlockType;
    align?: TextBlockAlign;
    text?: string;
    bordered?: boolean;
    className?: string;
}

export const TextBlock = memo(function TextBlock(props: TextBlockProps): ReactElement {
    const {
        type = TextBlockType.TEXT,
        align = TextBlockAlign.LEFT,
        text = '',
        bordered = false,
        className
    } = props;

    if (!text) {
        return <div className={classNames([cls.container, className])} />;
    }

    return (
        <div
            className={classNames([
                cls.container,
                cls[type] ?? cls[type],
                cls[align] ?? cls[align],
                bordered ? cls.withBorder : '',
                className
            ])}
        >
            {text}
        </div>
    );
});

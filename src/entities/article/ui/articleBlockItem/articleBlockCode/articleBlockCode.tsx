import { ReactElement, memo, useCallback } from 'react';

import { classNames } from 'shared/lib';
import CopyIcon from 'shared/assets/icons/copy.svg';

import cls from './articleBlockCode.module.scss';

interface ArticleBlockCodeProps {
    text: string;
    className?: string;
}

export const ArticleBlockCode = memo(function ArticleBlockCode({
    text,
    className
}: ArticleBlockCodeProps): ReactElement {
    const copyToClipboard = useCallback((): void => {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text);
        }
    }, [text]);

    return (
        <div className={classNames([cls.articleBlockCode, className])}>
            <span
                className={cls.action}
                onClick={copyToClipboard}
            >
                <CopyIcon />
            </span>

            <pre>{text}</pre>
        </div>
    );
});

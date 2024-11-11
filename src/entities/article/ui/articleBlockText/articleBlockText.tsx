import { Fragment, memo } from 'react';

import { classNames } from 'shared/lib';
import { TextBlock, TextBlockType } from 'shared/ui';

import cls from './articleBlockText.module.scss';

interface ArticleBlockTextProps {
    paragraphs: string[];
    title?: string;
    className?: string;
}

export const ArticleBlockText = memo((props: ArticleBlockTextProps) => {
    const { paragraphs, title, className } = props;

    return (
        <div className={classNames([cls.articleBlockText, className])}>
            {!!title && (
                <TextBlock
                    text={title}
                    type={TextBlockType.TITLE_ARTICLE}
                    className={cls.articleBlockTitle}
                />
            )}

            {paragraphs.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <TextBlock
                            text={item}
                            className={cls.articleBlockText}
                        />
                    </Fragment>
                );
            })}
        </div>
    );
});

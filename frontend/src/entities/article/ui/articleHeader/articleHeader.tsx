import { ReactElement, memo } from 'react';

import { classNames } from 'shared/lib';
import { ImageBlock, ImageBlockSize, TextBlock, TextBlockAlign, TextBlockType } from 'shared/ui';

import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';

import cls from './articleHeader.module.scss';

interface ArticleBlockTextProps {
    avatarSrc?: string;
    title?: string;
    views?: string;
    createdAt?: string;
    className?: string;
}

export const ArticleHeader = memo(function ArticleHeader(
    props: ArticleBlockTextProps
): ReactElement {
    const { title, avatarSrc, views, createdAt, className } = props;

    if (!avatarSrc && !title) {
        return <></>;
    }

    return (
        <div className={classNames([cls.container, className])}>
            <ImageBlock
                src={avatarSrc}
                size={ImageBlockSize.FULL_WIDTH}
                readonly={true}
                alt='article_avatar'
                className={cls.avatar}
            />

            <TextBlock
                align={TextBlockAlign.CENTER}
                type={TextBlockType.TITLE_MAIN}
                text={title}
            />

            {(views || createdAt) && (
                <div className={cls.info}>
                    {views && (
                        <div className={cls.infoItem}>
                            <EyeIcon />

                            <TextBlock text={views} />
                        </div>
                    )}
                    {createdAt && (
                        <div className={cls.infoItem}>
                            <CalendarIcon />

                            <TextBlock text={createdAt} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
});

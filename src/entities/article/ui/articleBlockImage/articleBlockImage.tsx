import { memo } from 'react';

import { classNames } from 'shared/lib';
import { ImageBlock, ImageBlockSize, TextBlock, TextBlockAlign, TextBlockType } from 'shared/ui';

import cls from './articleBlockImage.module.scss';

interface ArticleBlockImageProps {
    src: string;
    title?: string;
    className?: string;
}

export const ArticleBlockImage = memo((props: ArticleBlockImageProps) => {
    const { src, title, className } = props;

    return (
        <div className={classNames([cls.articleBlockImage, className])}>
            <div className={cls.articleBlockImageItem}>
                <ImageBlock
                    src={src}
                    size={ImageBlockSize.FULL_WIDTH}
                    readonly={true}
                />
            </div>

            <TextBlock
                text={title}
                align={TextBlockAlign.CENTER}
                type={TextBlockType.IMAGE_TITLE}
                className={cls.articleBlockImageTitle}
            />
        </div>
    );
});

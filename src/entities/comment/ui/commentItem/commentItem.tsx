import { ReactElement } from 'react';

import { classNames } from 'shared/lib';
import { ImageBlock, ImageBlockSize, TextBlock, TextBlockType } from 'shared/ui';

import { CommentEntity } from '../..//model/types/commentEntity';

import cls from './commentItem.module.scss';

interface CommentItemProps {
    item: CommentEntity;
    className?: string;
}

export const CommentItem = (props: CommentItemProps): ReactElement => {
    const { item, className } = props;

    return (
        <div className={classNames([cls.container, className])}>
            <div className={cls.header}>
                <ImageBlock
                    size={ImageBlockSize.SMALL}
                    src={item.user.avatarSrc}
                    readonly={true}
                    withBorder={true}
                />

                <TextBlock
                    type={TextBlockType.COMMENT_TITLE}
                    text={item.user.username}
                />
            </div>

            <TextBlock
                text={item.text}
                className={cls.text}
            />
        </div>
    );
};

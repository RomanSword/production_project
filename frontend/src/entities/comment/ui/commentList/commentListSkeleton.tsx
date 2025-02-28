import { CommentItemSkeleton } from '../commentItem/commentItemSkeleton';

import cls from './commentList.module.scss';

export function CommentListSkeleton() {
    return (
        <div className={cls.commentList}>
            <CommentItemSkeleton />
            <CommentItemSkeleton />
            <CommentItemSkeleton />
        </div>
    );
}

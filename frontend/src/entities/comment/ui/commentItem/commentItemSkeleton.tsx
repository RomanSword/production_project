import { Skeleton } from 'shared/ui';

import cls from './commentItem.module.scss';

export function CommentItemSkeleton() {
    return (
        <div className={cls.container}>
            <div className={cls.header}>
                <Skeleton
                    width='40px'
                    height='40px'
                    borderRadius='10px'
                />

                <Skeleton
                    width='300px'
                    height='20px'
                    borderRadius='10px'
                />
            </div>

            <Skeleton
                width='800px'
                height='60px'
                borderRadius='10px'
            />
        </div>
    );
}

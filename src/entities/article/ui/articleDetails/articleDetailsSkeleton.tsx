import { Skeleton } from 'shared/ui';

import cls from './articleDetails.module.scss';

export function ArticleDetailsSkeleton() {
    return (
        <div className={cls.skeletonContainer}>
            <Skeleton
                width='100%'
                height='300px'
            />
            <div style={{ height: 50 }} />
            <Skeleton
                width='400px'
                height='20px'
                borderRadius='10px'
            />
            <div style={{ height: 10 }} />
            <Skeleton
                width='200px'
                height='24px'
                borderRadius='10px'
            />
            <div style={{ height: 5 }} />
            <Skeleton
                width='200px'
                height='24px'
                borderRadius='10px'
            />
            <div style={{ height: 70 }} />
            <Skeleton
                width='100%'
                height='100px'
                borderRadius='10px'
            />
            <div style={{ height: 30 }} />
            <Skeleton
                width='100%'
                height='300px'
                borderRadius='10px'
            />
            <div style={{ height: 30 }} />
            <Skeleton
                width='100%'
                height='100px'
                borderRadius='10px'
            />
        </div>
    );
}

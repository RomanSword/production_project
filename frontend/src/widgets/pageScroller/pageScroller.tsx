import { classNames } from 'shared/lib';

import cls from './pageScroller.module.scss';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

interface PageScrollerProps {
    className?: string;
}

export const PageScroller = ({ className }: PageScrollerProps) => {
    const { t } = useTranslation();

    useEffect(() => {
        const processScroll = () => {};

        window.addEventListener();
    }, []);

    const onClickUp = () => {};

    const onClickDown = () => {};

    return (
        <div className={classNames([cls.pageScroller, className])}>
            <Button
                onClick={onClickUp}
                className={classNames([cls.toggleButton])}
            >
                {t('go_up')}
            </Button>

            <Button
                onClick={onClickDown}
                className={classNames([cls.toggleButton])}
            >
                {t('go_down')}
            </Button>
        </div>
    );
};

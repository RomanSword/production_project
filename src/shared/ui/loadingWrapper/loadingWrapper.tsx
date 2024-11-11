import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { FCCP } from 'app/types/declarations';
import { classNames } from 'shared/lib';
import { Button, Spinner, TextBlock, TextBlockAlign, TextBlockType } from 'shared/ui';

import cls from './loadingWrapper.module.scss';

interface LoadingWrapperProps {
    isLoading: boolean;
    renderSkeleton?: () => ReactElement;
    error?: string;
    onReload?: () => void;
    className?: string;
}

export const LoadingWrapper: FCCP<LoadingWrapperProps> = (props): ReactElement => {
    const { isLoading, renderSkeleton, error = '', onReload, className, children } = props;

    const { t } = useTranslation('form');

    let content = children;

    if (isLoading) {
        if (renderSkeleton) {
            content = renderSkeleton();
        } else {
            content = (
                <div className={cls.spinnerWrapper}>
                    <Spinner />
                </div>
            );
        }
    } else if (error) {
        content = (
            <div className={cls.errorWrapper}>
                <div className={cls.errorInnerBlock}>
                    <span className={cls.error}>
                        <TextBlock
                            type={TextBlockType.TITLE_MAIN}
                            align={TextBlockAlign.CENTER}
                            text={`${t('error_while_loading')}:`}
                        />

                        <TextBlock
                            type={TextBlockType.ERROR}
                            align={TextBlockAlign.CENTER}
                            text={error}
                        />
                    </span>

                    {onReload && (
                        <Button
                            data-testid='loading-wrapper-reload-button'
                            onClick={onReload}
                        >
                            {t('try_again')}
                        </Button>
                    )}
                </div>
            </div>
        );
    }

    return <div className={classNames([cls.container, className])}>{content}</div>;
};

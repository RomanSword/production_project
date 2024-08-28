import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { FCCP } from 'app/types/declarations';
import { classNames } from 'shared/lib';
import {
    Button,
    Spinner,
    SpinnerAppearance,
    TextBlock,
    TextBlockAlign,
    TextBlockType
} from 'shared/ui';

import cls from './loadingWrapper.module.scss';

interface LoadingWrapperProps {
    isLoading: boolean;
    contentClassName: string;
    error?: string;
    onReload?: () => void;
    className?: string;
}

export const LoadingWrapper: FCCP<LoadingWrapperProps> = (props): ReactElement => {
    const { isLoading, contentClassName, error = '', onReload, className, children } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames([cls.container, className])}>
            {isLoading && (
                <div className={cls.spinnerWrapper}>
                    <Spinner appearance={SpinnerAppearance.ALWAYS_BLACK} />
                </div>
            )}

            {error && (
                <div className={cls.errorWrapper}>
                    <div className={cls.errorInnerBlock}>
                        <span className={cls.error}>
                            <TextBlock
                                type={TextBlockType.TITLE}
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
            )}

            <div className={contentClassName}>{children}</div>
        </div>
    );
};

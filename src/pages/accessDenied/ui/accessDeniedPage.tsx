import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button, TextBlock, TextBlockType } from 'shared/ui';
import { AppRoutes, RoutePath } from 'shared/config';

import cls from './accessDeniedPage.module.scss';

export const AccessDeniedPage = (): ReactElement => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={cls.accessDenied}>
            <TextBlock
                type={TextBlockType.TITLE_MAIN}
                text={t('error.access_denied')}
            />
            <Button
                data-testid='go_to_main_page'
                onClick={() => navigate(RoutePath[AppRoutes.MAIN])}
                className={cls.themeSwitcher}
            >
                {t('error.go_to_main')}
            </Button>
        </div>
    );
};

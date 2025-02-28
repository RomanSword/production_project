import { ReactElement, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { Spinner } from 'shared/ui';
import { ModalOpenerButton } from 'widgets';

import { LoginFormAsync } from '../loginForm/loginForm.async';

import cls from './loginModalButton.module.scss';

export function LoginModalButton(): ReactElement {
    const { t } = useTranslation();

    return (
        <ModalOpenerButton
            buttonText={t('login')}
            modalName='loginForm'
            className={cls.button}
        >
            <Suspense fallback={<Spinner />}>
                <LoginFormAsync />
            </Suspense>
        </ModalOpenerButton>
    );
}

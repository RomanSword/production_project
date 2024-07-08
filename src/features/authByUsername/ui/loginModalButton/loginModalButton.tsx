import { ReactElement, Suspense, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Modal, Portal, Spinner } from 'shared/ui';

import { LoginFormAsync } from '../loginForm/loginForm.async';
import cls from './loginModalButton.module.scss';

export const LoginModalButton = (): ReactElement => {
    const { t } = useTranslation();
    const [isModalVisible, changeModalVisibility] = useState(false);

    const handleOnLoginModalClick = useCallback((): void => {
        changeModalVisibility(prev => !prev);
    }, []);

    return (
        <>
            <Button
                data-testid='call-login-modal-button'
                onClick={handleOnLoginModalClick}
                className={cls.button}
            >
                {t('login')}
            </Button>

            {isModalVisible && (
                <Portal>
                    <Modal onClose={handleOnLoginModalClick}>
                        <Suspense fallback={<Spinner />}>
                            <LoginFormAsync />
                        </Suspense>
                    </Modal>
                </Portal>
            )}
        </>
    );
};

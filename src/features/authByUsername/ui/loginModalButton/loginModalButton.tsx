import { ReactElement, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme, Modal, Portal } from 'shared/ui';

import { LoginForm } from '../loginForm/loginForm';
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
                theme={ButtonTheme.CLEAR}
                onClick={handleOnLoginModalClick}
                className={cls.button}
            >
                {t('login')}
            </Button>

            {isModalVisible && (
                <Portal>
                    <Modal onClose={handleOnLoginModalClick}>
                        <LoginForm />
                    </Modal>
                </Portal>
            )}
        </>
    );
};

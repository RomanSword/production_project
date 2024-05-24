import { ReactElement, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button, ButtonTheme, ModalPortal, TextField } from 'shared/ui';

import cls from './authButton.module.scss';

interface AuthButtonProps {
    className?: string;
}
export const AuthButton = ({ className }: AuthButtonProps): ReactElement => {
    const { t } = useTranslation();
    const [isModalVisible, changeModalVisibility] = useState(false);
    const [login, changeLogin] = useState('');
    const [password, changePassword] = useState('');

    const handleOnLoginModalClick = useCallback((): void => {
        changeModalVisibility(prev => !prev);
    }, []);

    const onChangeLogin = (value: string) => {
        changeLogin(value);
    };

    const onChangePassword = (value: string) => {
        changePassword(value);
    };

    return (
        <>
            <Button
                data-testid='call-login-modal-button'
                theme={ButtonTheme.CLEAR}
                onClick={handleOnLoginModalClick}
                className={classNames([cls.loginButton, className])}
            >
                {t('login')}
            </Button>

            {isModalVisible &&
                createPortal(
                    <ModalPortal onClose={handleOnLoginModalClick}>
                        <div className={cls.form}>
                            <fieldset className={cls.fieldset}>
                                <TextField
                                    id='login_email'
                                    label={t('email')}
                                    name='email'
                                    type='email'
                                    value={login}
                                    onChange={onChangeLogin}
                                />

                                <TextField
                                    id='login_password'
                                    label={t('password')}
                                    name='password'
                                    type='password'
                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </fieldset>

                            <Button
                                data-testid='login-button'
                                theme={ButtonTheme.CLEAR}
                                onClick={handleOnLoginModalClick}
                                className={cls.loginButton}
                            >
                                {t('login')}
                            </Button>
                        </div>
                    </ModalPortal>,
                    document.getElementsByClassName('app')[0]
                )}
        </>
    );
};

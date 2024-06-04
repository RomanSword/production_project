import { ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme, TextField } from 'shared/ui';

import cls from './loginForm.module.scss';

export const LoginForm = (): ReactElement => {
    const { t } = useTranslation();
    const [login, changeLogin] = useState('');
    const [password, changePassword] = useState('');

    const onSubmitClick = (): void => {
        console.log('submit');
    };

    const onChangeLogin = (value: string) => {
        changeLogin(value);
    };

    const onChangePassword = (value: string) => {
        changePassword(value);
    };

    return (
        <div className={cls.form}>
            <fieldset className={cls.fieldset}>
                <TextField
                    id='login_email'
                    testId='login-email-text-field'
                    label={t('email')}
                    name='email'
                    type='email'
                    value={login}
                    autoFocus={true}
                    onChange={onChangeLogin}
                />

                <TextField
                    id='login_password'
                    testId='login-password-text-field'
                    label={t('password')}
                    name='password'
                    type='password'
                    value={password}
                    onChange={onChangePassword}
                />
            </fieldset>

            <Button
                data-testid='login-submit-button'
                theme={ButtonTheme.CLEAR}
                onClick={onSubmitClick}
                className={cls.loginButton}
            >
                {t('login')}
            </Button>
        </div>
    );
};

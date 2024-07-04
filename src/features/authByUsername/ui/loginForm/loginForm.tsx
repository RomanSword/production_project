import { ReactElement, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, TextBlock, TextBlockType, TextField } from 'shared/ui';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import {
    getLoginUsername,
    getLoginPassword,
    getLoginIsLoading,
    getLoginError
} from '../../model/selectors';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import cls from './loginForm.module.scss';

const LoginForm = memo((): ReactElement => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(loginActions.clear());
        };
    }, [dispatch]);

    const { t } = useTranslation();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onSubmit = useCallback((): void => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <form
            className={cls.form}
            onSubmit={onSubmit}
        >
            <TextBlock
                className={cls.formTitle}
                type={TextBlockType.TITLE}
                text={t('login_form_title')}
            />

            <fieldset className={cls.fieldset}>
                <TextField
                    id='login_username'
                    testId='login-username-text-field'
                    label={t('username')}
                    name='username'
                    type='text'
                    value={username}
                    autoFocus={true}
                    onChange={onChangeUsername}
                />

                <TextField
                    id='login_password'
                    testId='username-password-text-field'
                    label={t('password')}
                    name='password'
                    type='password'
                    value={password}
                    onChange={onChangePassword}
                />
            </fieldset>

            <TextBlock
                className={cls.formError}
                type={TextBlockType.ERROR}
                text={error}
            />

            <Button
                data-testid='login-submit-button'
                onClick={onSubmit}
                isLoading={isLoading}
            >
                {t('login')}
            </Button>
        </form>
    );
});

export default LoginForm;

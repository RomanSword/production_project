import { ReactElement, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, TextBlock, TextBlockType, TextField } from 'shared/ui';
import { useAppDispatch } from 'shared/lib/hooks';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components';

import { getLoginIsLoading, getLoginError, getLoginFormData } from '../../model/selectors';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginValidationErrors } from '../../model/selectors/getLoginValidationErrors/getLoginValidationErrors';

import cls from './loginForm.module.scss';
import { getErrorTranslation } from 'shared/lib';

const initialReducers: ReducerList = {
    login: loginReducer
};

const LoginForm = memo(function LoginForm(): ReactElement {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();

    const { t } = useTranslation();
    const { t: tForm } = useTranslation('form');

    const formData = useSelector(getLoginFormData);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const validationErrors = useSelector(getLoginValidationErrors);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setDataField({ key: 'username', value }));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setDataField({ key: 'password', value }));
        },
        [dispatch]
    );

    const onSubmit = useCallback((): void => {
        dispatch(loginByUsername());
    }, [dispatch]);

    const isSubmitDisabled = Object.keys(validationErrors).length !== 0 || error !== '';

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <form
                className={cls.form}
                onSubmit={onSubmit}
            >
                <TextBlock
                    className={cls.formTitle}
                    type={TextBlockType.TITLE_MAIN}
                    text={t('login_form_title')}
                />

                <fieldset className={cls.fieldset}>
                    <TextField
                        id='login_username'
                        label={tForm('username')}
                        name='username'
                        type='text'
                        autoComplete='username'
                        value={formData.username}
                        autoFocus={true}
                        onChange={onChangeUsername}
                        error={getErrorTranslation(validationErrors.username, tForm)}
                    />

                    <TextField
                        id='login_password'
                        label={tForm('password')}
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        value={formData.password}
                        onChange={onChangePassword}
                        error={getErrorTranslation(validationErrors.password, tForm)}
                    />
                </fieldset>

                <TextBlock
                    className={cls.formError}
                    type={TextBlockType.ERROR}
                    text={error}
                    bordered={true}
                />

                <Button
                    data-testid='login-submit-button'
                    onClick={onSubmit}
                    isLoading={isLoading}
                    isDisabled={isSubmitDisabled}
                >
                    {t('login')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;

import { useCallback, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { LoadingWrapper } from 'shared/ui';

import {
    getProfileError,
    getProfileFormData,
    getProfileReadonly,
    getProfileIsLoading,
    getProfileIsEdited,
    profileActions,
    fetchProfileDataById,
    profileReducer,
    ProfileFormBody,
    ProfileFormHeader,
    updateProfileData,
    getProfileValidationErrors,
    getProfileAuthData
} from 'entities/profile';
import { fileReducer } from 'entities/file';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components';
import { CityChangeArgs, CountryChangeArgs } from 'shared/const/common';

import cls from './profilePage.module.scss';

const reducers: ReducerList = {
    profile: profileReducer,
    file: fileReducer
};

const ProfilePage = (): ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();
    const { id } = useParams<{ id: string }>();

    const { t } = useTranslation();

    const authData = useSelector(getProfileAuthData);
    const formData = useSelector(getProfileFormData);
    const error = useSelector(getProfileError);
    const validationErrors = useSelector(getProfileValidationErrors);
    const readonly = useSelector(getProfileReadonly) || authData?.id !== formData.id;
    const isLoading = useSelector(getProfileIsLoading);
    const isEdited = useSelector(getProfileIsEdited);

    useInitialEffect(() => {
        dispatch(fetchProfileDataById(id));
    }, profileActions.cancelEdit);

    const reloadFormData = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileDataById(id));
        }
    }, [dispatch, id]);

    const startEdit = useCallback(() => {
        dispatch(profileActions.startEdit());
    }, [dispatch]);

    const applyEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const cancelEdit = useCallback(() => {
        let isConfirmed = true;

        if (isEdited) {
            isConfirmed = confirm(t('unsaved_edit'));
        }

        if (isConfirmed) {
            dispatch(profileActions.cancelEdit());
        }
    }, [dispatch, isEdited, t]);

    const onChangeFormDataField = useCallback(
        (key: string, value: string) => {
            dispatch(profileActions.setFormDataField({ key, value }));
        },
        [dispatch]
    );

    const onChangeCountryField = useCallback(
        (args: CountryChangeArgs) => {
            dispatch(profileActions.setFormDataCountry({ ...args }));
        },
        [dispatch]
    );

    const onChangeCityField = useCallback(
        (args: CityChangeArgs) => {
            dispatch(profileActions.setFormDataCity({ ...args }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <LoadingWrapper
                error={error}
                isLoading={isLoading}
                onReload={reloadFormData}
                className={cls.container}
            >
                <div className={cls.innerContainer}>
                    <ProfileFormHeader
                        readonly={readonly}
                        errors={validationErrors}
                        isLoading={isLoading}
                        isEdited={isEdited}
                        startEdit={startEdit}
                        applyEdit={applyEdit}
                        cancelEdit={cancelEdit}
                    />
                    <ProfileFormBody
                        formData={formData}
                        errors={validationErrors}
                        readonly={readonly}
                        isLoading={isLoading}
                        onChangeField={onChangeFormDataField}
                        onChangeCountryField={onChangeCountryField}
                        onChangeCityField={onChangeCityField}
                    />
                </div>
            </LoadingWrapper>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;

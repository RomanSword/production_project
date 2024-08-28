import { useCallback, useEffect, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'shared/lib/hooks';
import { LoadingWrapper } from 'shared/ui';

import {
    getProfileError,
    getProfileFormData,
    getProfileReadonly,
    getProfileIsLoading,
    getProfileIsEdited,
    profileActions,
    fetchProfileData,
    profileReducer,
    ProfileFormBody,
    ProfileFormHeader,
    updateProfileData
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
    const { t } = useTranslation();

    const formData = useSelector(getProfileFormData);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const isEdited = useSelector(getProfileIsEdited);

    useEffect(() => {
        dispatch(fetchProfileData());
        profileActions.cancelEdit();

        return () => {
            profileActions.cancelEdit();
        };
    }, [dispatch]);

    const reloadFormData = useCallback(() => {
        dispatch(fetchProfileData());
        profileActions.cancelEdit();
    }, [dispatch]);

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
                contentClassName={cls.container}
            >
                <ProfileFormHeader
                    readonly={readonly}
                    isLoading={isLoading}
                    isEdited={isEdited}
                    startEdit={startEdit}
                    applyEdit={applyEdit}
                    cancelEdit={cancelEdit}
                />
                <ProfileFormBody
                    formData={formData}
                    readonly={readonly}
                    isLoading={isLoading}
                    onChangeField={onChangeFormDataField}
                    onChangeCountryField={onChangeCountryField}
                    onChangeCityField={onChangeCityField}
                />
            </LoadingWrapper>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;

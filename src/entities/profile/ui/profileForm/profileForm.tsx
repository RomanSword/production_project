import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib';
import {
    Button,
    ImageField,
    LoadingWrapper,
    Selector,
    TextBlock,
    TextBlockType,
    TextField
} from 'shared/ui';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { fetchProfileData } from '../../model/services/fetchProfileData';
import {
    getProfileFormDataAge,
    getProfileFormDataAvatar,
    getProfileFormDataCity,
    getProfileFormDataCountry,
    getProfileFormDataFirstname,
    getProfileFormDataLastname,
    getProfileFormDataUsername,
    getProfileIsLoading
} from '../../model/selectors';

import cls from './profileForm.module.scss';
import { useTranslation } from 'react-i18next';
import { profileActions } from 'entities/profile/model/slice/profileSlice';
import { cities, countries } from 'shared/const/common';

interface ProfileFormProps {
    className?: string;
}

const ProfileForm = ({ className }: ProfileFormProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch<any>();

    const age = useSelector(getProfileFormDataAge);
    const avatar = useSelector(getProfileFormDataAvatar);
    const city = useSelector(getProfileFormDataCity);
    const country = useSelector(getProfileFormDataCountry);
    const firstname = useSelector(getProfileFormDataFirstname);
    const lastname = useSelector(getProfileFormDataLastname);
    const username = useSelector(getProfileFormDataUsername);
    const isLoading = useSelector(getProfileIsLoading);

    const [readOnly, setReadOnly] = useState(true);

    useEffect(() => {
        dispatch(fetchProfileData());
        profileActions.resetFormData();

        return () => {
            profileActions.resetFormData();
        };
    }, [dispatch]);

    const onChangeEditMode = useCallback(() => {
        setReadOnly(prev => !prev);
    }, []);

    const onSaveEdit = useCallback(() => {
        setReadOnly(prev => !prev);
        dispatch(profileActions.applyFormData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        setReadOnly(prev => !prev);
        dispatch(profileActions.resetFormData());
    }, [dispatch]);

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.setDataAvatar(value));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.setDataUsername(value));
        },
        [dispatch]
    );

    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(profileActions.setDataFirstname(value));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(profileActions.setDataLastname(value));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value: string) => {
            dispatch(profileActions.setDataAge(Number(value)));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (value: string) => {
            dispatch(profileActions.setDataCountry(value));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.setDataCity(value));
        },
        [dispatch]
    );

    return (
        <LoadingWrapper isLoading={isLoading}>
            <div className={classNames([cls.form, className])}>
                <div className={cls.panel}>
                    <TextBlock
                        type={TextBlockType.TITLE}
                        text={t('title')}
                    />

                    <div className={cls.actions}>
                        {readOnly && (
                            <Button
                                data-testid='profile-edit-mode-button'
                                onClick={onChangeEditMode}
                                isLoading={isLoading}
                            >
                                {t('edit')}
                            </Button>
                        )}

                        {!readOnly && (
                            <Button
                                data-testid='profile-save-edit-button'
                                onClick={onSaveEdit}
                            >
                                {t('save')}
                            </Button>
                        )}

                        {!readOnly && (
                            <Button
                                data-testid='profile-cancel-edit-button'
                                onClick={onCancelEdit}
                            >
                                {t('cancel')}
                            </Button>
                        )}
                    </div>
                </div>

                <fieldset className={cls.fieldset}>
                    <ImageField
                        src={avatar}
                        isLoadingSrc={isLoading}
                        alt={t('avatar')}
                        label={t('avatar')}
                        changeSrc={onChangeAvatar}
                        readOnly={readOnly}
                    />

                    <TextField
                        id='profile_username'
                        name='username'
                        label={t('username')}
                        value={username}
                        onChange={onChangeUsername}
                        readOnly={readOnly}
                    />
                    <TextField
                        id='profile_firstname'
                        name='firstname'
                        label={t('firstname')}
                        value={firstname}
                        onChange={onChangeFirstname}
                        readOnly={readOnly}
                    />
                    <TextField
                        id='profile_lastname'
                        name='lastname'
                        label={t('lastname')}
                        value={lastname}
                        onChange={onChangeLastname}
                        readOnly={readOnly}
                    />
                    <TextField
                        id='profile_age'
                        name='age'
                        label={t('age')}
                        value={age}
                        onChange={onChangeAge}
                        readOnly={readOnly}
                    />
                    <Selector
                        label={t('country')}
                        placeholder={t('select_country')}
                        options={countries}
                        selectedId={country}
                        onOptionClick={onChangeCountry}
                        readOnly={readOnly}
                    />
                    <Selector
                        label={t('city')}
                        placeholder={t('select_city')}
                        options={cities}
                        selectedId={city}
                        onOptionClick={onChangeCity}
                        readOnly={readOnly}
                    />
                </fieldset>
            </div>
        </LoadingWrapper>
    );
};

export default ProfileForm;

import { useTranslation } from 'react-i18next';

import { CountriesSelector } from 'entities/countries';
import { CitiesSelector } from 'entities/city';
import { Profile } from 'entities/profile';

import { IValidationErrors, classNames, getErrorTranslation } from 'shared/lib';
import { ImageField, TextField } from 'shared/ui';

import { CityChangeArgs, CountryChangeArgs } from 'shared/const/common';

import cls from './profileFormBody.module.scss';

interface IProps {
    readonly: boolean;
    formData: Profile;
    errors: IValidationErrors;
    onChangeField: (key: string, value: string) => void;
    onChangeCountryField: (args: CountryChangeArgs) => void;
    onChangeCityField: (args: CityChangeArgs) => void;
    isLoading?: boolean;
    withLoadingAvatar?: boolean;
    withLoadingCover?: boolean;
    className?: string;
}

export const ProfileFormBody = (props: IProps) => {
    const {
        readonly,
        formData,
        errors,
        isLoading,
        onChangeField,
        onChangeCountryField,
        onChangeCityField,
        className,
        withLoadingAvatar = true,
        withLoadingCover = true
    } = props;

    const { t: tForm } = useTranslation('form');

    return (
        <fieldset className={classNames([cls.fieldset, className])}>
            <ImageField
                src={formData.avatar_src}
                isLoadingSrc={isLoading}
                alt={tForm('avatar')}
                label={tForm('avatar')}
                changeSrc={value => onChangeField('avatar_src', value)}
                clearSrc={() => onChangeField('avatar_src', '')}
                withLoadingImage={withLoadingAvatar}
                readonly={readonly}
            />
            <ImageField
                src={formData.cover_src}
                isLoadingSrc={isLoading}
                alt={tForm('cover')}
                label={tForm('cover')}
                changeSrc={value => onChangeField('cover_src', value)}
                clearSrc={() => onChangeField('cover_src', '')}
                withLoadingImage={withLoadingCover}
                readonly={readonly}
            />
            <TextField
                id='profile_username'
                name='username'
                label={tForm('username')}
                value={formData.username}
                onChange={value => onChangeField('username', value)}
                readonly={readonly}
                isRequired={true}
                error={getErrorTranslation(errors.username, tForm)}
            />
            <TextField
                id='profile_firstname'
                name='firstname'
                label={tForm('firstname')}
                value={formData.firstname}
                onChange={value => onChangeField('firstname', value)}
                readonly={readonly}
                isRequired={true}
                error={getErrorTranslation(errors.firstname, tForm)}
            />
            <TextField
                id='profile_lastname'
                name='lastname'
                label={tForm('lastname')}
                value={formData.lastname}
                onChange={value => onChangeField('lastname', value)}
                readonly={readonly}
                isRequired={true}
                error={getErrorTranslation(errors.lastname, tForm)}
            />
            <TextField
                id='profile_age'
                name='age'
                type='number'
                label={tForm('age')}
                value={formData.age}
                onChange={value => onChangeField('age', value)}
                readonly={readonly}
                isRequired={true}
                error={getErrorTranslation(errors.age, tForm)}
            />
            <CountriesSelector
                onOptionClick={onChangeCountryField}
                selectedItem={formData.country}
                readonly={readonly}
            />
            <CitiesSelector
                onOptionClick={onChangeCityField}
                countryId={formData.country_id}
                selectedItem={formData.city}
                readonly={readonly}
            />
        </fieldset>
    );
};

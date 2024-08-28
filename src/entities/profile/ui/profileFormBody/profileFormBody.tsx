import { useTranslation } from 'react-i18next';

import { CountriesSelector } from 'entities/countries';
import { CitiesSelector } from 'entities/city';
import { Profile } from 'entities/profile';

import { classNames } from 'shared/lib';
import { ImageField, TextField } from 'shared/ui';

import { CityChangeArgs, CountryChangeArgs } from 'shared/const/common';

import cls from './profileFormBody.module.scss';

interface IProps {
    readonly: boolean;
    formData: Profile;
    onChangeField: (key: string, value: string) => void;
    onChangeCountryField: (args: CountryChangeArgs) => void;
    onChangeCityField: (args: CityChangeArgs) => void;
    isLoading?: boolean;
    className?: string;
}

export const ProfileFormBody = (props: IProps) => {
    const {
        readonly,
        formData,
        isLoading,
        onChangeField,
        onChangeCountryField,
        onChangeCityField,
        className
    } = props;

    const { t } = useTranslation('profile');

    return (
        <fieldset className={classNames([cls.fieldset, className])}>
            <ImageField
                src={formData.avatarSrc}
                isLoadingSrc={isLoading}
                alt={t('avatar')}
                label={t('avatar')}
                changeSrc={value => onChangeField('avatarSrc', value)}
                clearSrc={() => onChangeField('avatarSrc', '')}
                readonly={readonly}
            />
            <ImageField
                src={formData.coverSrc}
                isLoadingSrc={isLoading}
                alt={t('cover')}
                label={t('cover')}
                changeSrc={value => onChangeField('coverSrc', value)}
                clearSrc={() => onChangeField('coverSrc', '')}
                readonly={readonly}
            />
            <TextField
                id='profile_username'
                name='username'
                label={t('username')}
                value={formData.username}
                onChange={value => onChangeField('username', value)}
                readonly={readonly}
            />
            <TextField
                id='profile_firstname'
                name='firstname'
                label={t('firstname')}
                value={formData.firstname}
                onChange={value => onChangeField('firstname', value)}
                readonly={readonly}
            />
            <TextField
                id='profile_lastname'
                name='lastname'
                label={t('lastname')}
                value={formData.lastname}
                onChange={value => onChangeField('lastname', value)}
                readonly={readonly}
            />
            <TextField
                id='profile_age'
                name='age'
                type='number'
                label={t('age')}
                value={formData.age}
                onChange={value => onChangeField('age', value)}
                readonly={readonly}
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

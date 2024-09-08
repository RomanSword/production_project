import { ReactElement, memo, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Selector } from 'shared/ui';
import { CountryChangeArgs } from 'shared/const/common';

import { fetchCountriesData } from '../../model/services/fetchCountriesData/fetchCountriesData';
import { countriesReducer } from '../../model/slice/countriesSlice';
import { getCountriesIsLoading } from '../../model/selectors/getCountriesIsLoading/getCountriesIsLoading';
import { getCountriesError } from '../../model/selectors/getCountriesError/getCountriesError';
import { getCountriesData } from '../../model/selectors/getCountriesData/getCountriesData';

interface CountriesSelectorProps {
    onOptionClick: (args: CountryChangeArgs) => void;
    selectedItem?: { id: string; name: { ru: string; en: string } };
    validationError?: string;
    readonly?: boolean;
    isErrorLabelShowed?: boolean;
    className?: string;
}

const reducers: ReducerList = {
    countries: countriesReducer
};

export const CountriesSelector = memo(function CountriesSelector(
    props: CountriesSelectorProps
): ReactElement {
    const { selectedItem, validationError, onOptionClick, readonly, className } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();
    const { t, i18n } = useTranslation('form');

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCountriesData());
        }
    }, [dispatch]);

    const isLoading = useSelector(getCountriesIsLoading);
    const error = useSelector(getCountriesError);
    const data = useSelector(getCountriesData);

    const options = useMemo(() => {
        const locale = i18n.language;

        return data.map(item => {
            return {
                id: item.id,
                text: locale === 'en' ? item.name.en : item.name.ru
            };
        });
    }, [data, i18n.language]);

    const selectedText = useMemo(() => {
        const locale = i18n.language;

        return locale === 'en' ? selectedItem?.name.en : selectedItem?.name.ru;
    }, [selectedItem, i18n.language]);

    const handleOnOptionClick = useCallback(
        (id: string): void => {
            const country = data.find(item => item.id === id);

            if (country) {
                onOptionClick({ value: country });
            }
        },
        [data, onOptionClick]
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Selector
                label={t('country')}
                placeholder={readonly ? t('not_selected') : t('select_value')}
                options={options}
                isLoading={isLoading}
                error={error || validationError}
                selectedId={selectedItem?.id}
                selectedText={selectedText}
                onOptionClick={handleOnOptionClick}
                readonly={readonly}
                className={className}
            />
        </DynamicModuleLoader>
    );
});

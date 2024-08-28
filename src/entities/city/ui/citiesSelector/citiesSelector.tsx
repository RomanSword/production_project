import { ReactElement, memo, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Selector } from 'shared/ui';
import { CityChangeArgs } from 'shared/const/common';

import { fetchCitiesData } from '../../model/services/fetchCitiesData/fetchCitiesData';
import { citiesReducer } from '../../model/slice/citiesSlice';
import { getCitiesIsLoading } from '../../model/selectors/getCitiesIsLoading/getCitiesIsLoading';
import { getCitiesError } from '../../model/selectors/getCitiesError/getCitiesError';
import { getCitiesData } from '../../model/selectors/getCitiesData/getCitiesData';

interface CitiesSelectorProps {
    onOptionClick: (args: CityChangeArgs) => void;
    countryId?: string;
    selectedItem?: { id: string; country_id: string; name: { ru: string; en: string } };
    validationError?: string;
    readonly?: boolean;
    isErrorLabelShowed?: boolean;
    className?: string;
}

const reducers: ReducerList = {
    cities: citiesReducer
};

export const CitiesSelector = memo(function CitiesSelector(
    props: CitiesSelectorProps
): ReactElement {
    const { countryId, selectedItem, validationError, onOptionClick, readonly, className } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useAppDispatch<any>();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (countryId) {
            dispatch(fetchCitiesData({ country_id: countryId }));
        }
    }, [dispatch, countryId]);

    const isLoading = useSelector(getCitiesIsLoading);
    const error = useSelector(getCitiesError);
    const data = useSelector(getCitiesData);

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
            const city = data.find(item => item.id === id);

            if (city) {
                onOptionClick({ value: city });
            }
        },
        [data, onOptionClick]
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Selector
                label={t('city')}
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

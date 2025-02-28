import { StateSchema } from 'app/providers/storeProvider';

import { getCountriesData } from './getCountriesData';

const countriesState: StateSchema = {
    countries: {
        isLoading: false,
        data: [
            {
                id: '111',
                name_ru: 'qwe',
                name_en: 'qwe'
            }
        ]
    }
};

describe('selector getCountriesData', () => {
    test('should return length of countries === 1', () => {
        expect(getCountriesData(countriesState).length).toEqual(1);
    });

    test('should work with empty state', () => {
        expect(getCountriesData({}).length).toEqual(0);
    });
});

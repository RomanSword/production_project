import { StateSchema } from 'app/providers/storeProvider';

import { getCitiesData } from './getCitiesData';

const citiesState: StateSchema = {
    cities: {
        isLoading: false,
        data: [
            {
                id: '1',
                country_id: '1',
                name: { ru: 'Москва', en: 'Moscow' }
            }
        ]
    }
};

describe('selector getCitiesData', () => {
    test('should return length of cities === 1', () => {
        expect(getCitiesData(citiesState).length).toEqual(1);
    });

    test('should work with empty state', () => {
        expect(getCitiesData({}).length).toEqual(0);
    });
});

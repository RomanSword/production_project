import { StateSchema } from 'app/providers/storeProvider';

import { getCitiesIsLoading } from './getCitiesIsLoading';

const isLoading = true;
const citiesState: StateSchema = {
    cities: {
        isLoading,
        data: []
    }
};

describe('selector getCitiesIsLoading', () => {
    test('should return isLoading from cities state', () => {
        expect(getCitiesIsLoading(citiesState)).toEqual(isLoading);
    });

    test('should work with empty state', () => {
        expect(getCitiesIsLoading({})).toEqual(false);
    });
});

import { StateSchema } from 'app/providers/storeProvider';

import { getCountriesIsLoading } from './getCountriesIsLoading';

const isLoading = true;
const countriesState: StateSchema = {
    countries: {
        isLoading,
        data: []
    }
};

describe('selector getCountriesIsLoading', () => {
    test('should return isLoading from countries state', () => {
        expect(getCountriesIsLoading(countriesState)).toEqual(isLoading);
    });

    test('should work with empty state', () => {
        expect(getCountriesIsLoading({})).toEqual(false);
    });
});

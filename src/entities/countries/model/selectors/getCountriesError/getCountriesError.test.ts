import { StateSchema } from 'app/providers/storeProvider';

import { getCountriesError } from './getCountriesError';

const error = 'error';
const countriesState: StateSchema = {
    countries: {
        error,
        isLoading: false,
        data: []
    }
};

describe('selector getCountriesError', () => {
    test('should return error from countries state', () => {
        expect(getCountriesError(countriesState)).toEqual(error);
    });

    test('should work with empty state', () => {
        expect(getCountriesError({})).toEqual('');
    });
});

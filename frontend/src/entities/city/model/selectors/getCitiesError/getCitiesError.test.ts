import { StateSchema } from 'app/providers/storeProvider';

import { getCitiesError } from './getCitiesError';

const error = 'error';
const citiesState: StateSchema = {
    cities: {
        error,
        isLoading: false,
        data: []
    }
};

describe('selector citiesState', () => {
    test('should return error from cities state', () => {
        expect(getCitiesError(citiesState)).toEqual(error);
    });

    test('should work with empty state', () => {
        expect(getCitiesError({})).toEqual('');
    });
});

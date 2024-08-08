import { StateSchema } from 'app/providers/storeProvider';

import { getProfileIsLoading } from './getProfileIsLoading';

const isLoading = true;
const profileState: StateSchema = {
    profile: {
        error: '',
        isLoading,
        readonly: false,
        formData: {},
        data: {}
    }
};

describe('selector getProfileIsLoading', () => {
    test('should return isLoading from login state', () => {
        expect(getProfileIsLoading(profileState)).toEqual(isLoading);
    });

    test('should work with empty state', () => {
        expect(getProfileIsLoading({})).toEqual(false);
    });
});

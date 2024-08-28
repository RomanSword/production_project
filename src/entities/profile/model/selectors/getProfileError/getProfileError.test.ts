import { StateSchema } from 'app/providers/storeProvider';

import { getProfileError } from './getProfileError';

const error = 'error';
const profileState: StateSchema = {
    profile: {
        error,
        isLoading: false,
        isEdited: false,
        readonly: false,
        formData: {},
        data: {}
    }
};

describe('selector getLoginError', () => {
    test('should return error from profile state', () => {
        expect(getProfileError(profileState)).toEqual(error);
    });

    test('should work with empty state', () => {
        expect(getProfileError({})).toEqual('');
    });
});

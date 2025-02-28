import { StateSchema } from 'app/providers/storeProvider';

import { getProfileValidationErrors } from './getProfileValidationErrors';

const profileState: StateSchema = {
    profile: {
        error: '',
        validationErrors: { age: 'test' },
        isLoading: false,
        isEdited: false,
        readonly: false,
        isInited: false,
        formData: {},
        data: {}
    }
};

describe('selector getLoginError', () => {
    test('should return error from profile state', () => {
        expect(getProfileValidationErrors(profileState).age).toEqual(
            profileState.profile?.validationErrors?.age
        );
    });

    test('should work with empty state', () => {
        expect(Object.keys(getProfileValidationErrors({})).length).toEqual(0);
    });
});

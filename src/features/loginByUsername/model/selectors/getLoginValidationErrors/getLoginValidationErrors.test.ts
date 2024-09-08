import { StateSchema } from 'app/providers/storeProvider';

import { getLoginValidationErrors } from './getLoginValidationErrors';

const loginState: StateSchema = {
    login: {
        error: '',
        validationErrors: { username: 'test' },
        isLoading: false,
        formData: {}
    }
};

describe('selector getLoginValidationErrors', () => {
    test('should return error from login state', () => {
        expect(getLoginValidationErrors(loginState).username).toEqual(
            loginState.login?.validationErrors?.username
        );
    });

    test('should work with empty state', () => {
        expect(Object.keys(getLoginValidationErrors({})).length).toEqual(0);
    });
});

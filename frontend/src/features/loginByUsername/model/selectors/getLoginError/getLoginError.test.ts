import { StateSchema } from 'app/providers/storeProvider';

import { getLoginError } from './getLoginError';

const error = 'error';
const loginState: StateSchema = {
    login: { formData: { username: '', password: '' }, isLoading: false, error }
};

describe('selector getLoginError', () => {
    test('should return error from login state', () => {
        expect(getLoginError(loginState)).toEqual(error);
    });

    test('should work with empty state', () => {
        expect(getLoginError({})).toEqual('');
    });
});

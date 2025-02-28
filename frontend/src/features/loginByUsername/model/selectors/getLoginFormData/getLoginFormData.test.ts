import { StateSchema } from 'app/providers/storeProvider';

import { getLoginFormData } from './getLoginFormData';

const password = 'password';
const loginState: StateSchema = {
    login: { formData: { username: '', password }, isLoading: false, error: '' }
};

describe('selector getLoginPassword', () => {
    test('should return password from login state formData', () => {
        expect(getLoginFormData(loginState)?.password).toEqual(password);
    });

    test('should work with empty state', () => {
        expect(Object.keys(getLoginFormData({}) || {}).length).toEqual(0);
    });
});

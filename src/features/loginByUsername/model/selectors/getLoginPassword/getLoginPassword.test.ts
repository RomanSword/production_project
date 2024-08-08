import { StateSchema } from 'app/providers/storeProvider';

import { getLoginPassword } from './getLoginPassword';

const password = 'password';
const loginState: StateSchema = {
    login: { username: '', password, isLoading: false, error: '' }
};

describe('selector getLoginPassword', () => {
    test('should return password from login state', () => {
        expect(getLoginPassword(loginState)).toEqual(password);
    });

    test('should work with empty state', () => {
        expect(getLoginPassword({})).toEqual('');
    });
});

import { StateSchema } from 'app/providers/storeProvider';

import { getLoginUsername } from './getLoginUsername';

const username = 'username';
const loginState: StateSchema = {
    login: { username, password: '', isLoading: false, error: '' }
};

describe('selector getLoginUsername', () => {
    test('should return username from login state', () => {
        expect(getLoginUsername(loginState)).toEqual(username);
    });

    test('should work with empty state', () => {
        expect(getLoginUsername({})).toEqual('');
    });
});

import { StateSchema } from 'app/providers/storeProvider';

import { getUsername } from './getUsername';

const userState: StateSchema = {
    user: {
        authData: { username: '', id: '' },
        _inited: true
    }
};

describe('selector getUsername', () => {
    test('should return user username', () => {
        expect(getUsername(userState)).toEqual(userState.user?.authData.username);
    });

    test('should work with empty state', () => {
        expect(getUsername({})).toEqual('');
    });
});

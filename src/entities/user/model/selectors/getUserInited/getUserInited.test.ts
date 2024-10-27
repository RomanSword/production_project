import { StateSchema } from 'app/providers/storeProvider';

import { getUserInited } from './getUserInited';

const userState: StateSchema = {
    user: {
        authData: {},
        _inited: true
    }
};

describe('selector getUserInited', () => {
    test('should return user inited', () => {
        expect(getUserInited(userState)).toEqual(userState.user?._inited);
    });

    test('should work with empty state', () => {
        expect(getUserInited({})).toEqual('');
    });
});

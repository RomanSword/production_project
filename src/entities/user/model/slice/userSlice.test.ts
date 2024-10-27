import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

import { UserSchema } from '../types/user';
import { userReducer, userActions } from './userSlice';

const loginState: UserSchema = { authData: { id: '', username: '' }, _inited: true };
const newValue = { id: '123', username: '123' };

describe('test slice user', () => {
    test('test set auth data', () => {
        const result = userReducer(loginState, userActions.setAuthData(newValue));

        expect(result.authData.id).toBe(newValue.id);
        expect(result.authData.username).toBe(newValue.username);
    });

    test('test init auth data', () => {
        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(newValue));

        const result = userReducer(loginState, userActions.initAuthData());

        expect(result.authData.id).toBe(newValue.id);
    });

    test('test clear state', () => {
        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(newValue));

        const result = userReducer(loginState, userActions.clear());

        expect(Object.keys(result.authData).length).toBe(0);
    });
});

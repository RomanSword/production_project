import { StateSchema } from 'app/providers/storeProvider';

import { getLoginIsLoading } from './getLoginIsLoading';

const isLoading = true;
const loginState: StateSchema = {
    login: { formData: { username: '', password: '' }, isLoading, error: '' }
};

describe('selector getLoginIsLoading', () => {
    test('should return isLoading from login state', () => {
        expect(getLoginIsLoading(loginState)).toEqual(isLoading);
    });

    test('should work with empty state', () => {
        expect(getLoginIsLoading({})).toEqual(false);
    });
});

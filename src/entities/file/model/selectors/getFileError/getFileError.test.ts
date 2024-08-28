import { StateSchema } from 'app/providers/storeProvider';

import { getFileError } from './getFileError';

const error = 'error';
const fileState: StateSchema = {
    file: {
        error,
        isLoading: false,
        data: {}
    }
};

describe('selector getLoginError', () => {
    test('should return error from file state', () => {
        expect(getFileError(fileState)).toEqual(error);
    });

    test('should work with empty state', () => {
        expect(getFileError({})).toEqual('');
    });
});

import { StateSchema } from 'app/providers/storeProvider';

import { getFileIsLoading } from './getFileIsLoading';

const isLoading = true;
const fileState: StateSchema = {
    file: {
        data: {},
        error: '',
        isLoading
    }
};

describe('selector getFileIsLoading', () => {
    test('should return isLoading from file state', () => {
        expect(getFileIsLoading(fileState)).toEqual(isLoading);
    });

    test('should work with empty state', () => {
        expect(getFileIsLoading({})).toEqual(false);
    });
});

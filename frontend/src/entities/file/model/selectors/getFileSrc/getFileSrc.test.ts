import { StateSchema } from 'app/providers/storeProvider';

import { getFileSrc } from './getFileSrc';

const fileState: StateSchema = {
    file: {
        isLoading: false,
        data: {
            src: 'test'
        }
    }
};

describe('selector getFileSrc', () => {
    test('should return file src', () => {
        expect(getFileSrc(fileState)).toEqual(fileState.file?.data.src);
    });

    test('should work with empty state', () => {
        expect(getFileSrc({})).toEqual('');
    });
});

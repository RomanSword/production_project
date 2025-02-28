import { StateSchema } from 'app/providers/storeProvider';

import { getProfileIsInited } from './getProfileIsInited';

const userState: StateSchema = {
    profile: {
        data: {},
        formData: {},
        readonly: false,
        isInited: true,
        isEdited: false,
        isLoading: false
    }
};

describe('selector getProfileIsInited', () => {
    test('should return profile inited', () => {
        expect(getProfileIsInited(userState)).toEqual(userState.profile?.isInited);
    });

    test('should work with empty state', () => {
        expect(getProfileIsInited({})).toEqual(false);
    });
});

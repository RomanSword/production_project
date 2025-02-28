import { StateSchema } from 'app/providers/storeProvider';

import { getProfileIsEdited } from './getProfileIsEdited';

const profileState: StateSchema = {
    profile: {
        error: '',
        isLoading: false,
        isEdited: true,
        readonly: false,
        isInited: false,
        data: {},
        formData: {}
    }
};

describe('selector getProfileReadonly', () => {
    test('should return profile isEdited', () => {
        expect(getProfileIsEdited(profileState)).toEqual(profileState.profile?.isEdited);
    });

    test('should work with empty state', () => {
        expect(getProfileIsEdited({})).toEqual(false);
    });
});

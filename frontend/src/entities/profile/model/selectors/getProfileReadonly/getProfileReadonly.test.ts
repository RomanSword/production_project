import { StateSchema } from 'app/providers/storeProvider';

import { getProfileReadonly } from './getProfileReadonly';

const profileState: StateSchema = {
    profile: {
        error: '',
        isLoading: false,
        isEdited: false,
        readonly: false,
        isInited: false,
        data: {},
        formData: {}
    }
};

describe('selector getProfileReadonly', () => {
    test('should return profile readonly', () => {
        expect(getProfileReadonly(profileState)).toEqual(profileState.profile?.readonly);
    });

    test('should work with empty state', () => {
        expect(getProfileReadonly({})).toEqual(false);
    });
});

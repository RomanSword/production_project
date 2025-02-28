import { StateSchema } from 'app/providers/storeProvider';

import { getProfileData } from './getProfileData';

const data = {
    id: '1',
    username: 'admin',
    firstname: 'Роман',
    lastname: 'Белков',
    age: 28,
    country: { id: '123', name_ru: '123', name_en: '123' },
    city: { id: '123', country_id: '123', name_ru: '123', name_en: '123' },
    avatar_src: 'https://test.com'
};

const profileState: StateSchema = {
    profile: {
        error: '',
        isLoading: false,
        isEdited: false,
        isInited: false,
        readonly: false,
        data: { ...data },
        formData: { ...data }
    }
};

describe('selector getProfileData', () => {
    test('should return profile data age', () => {
        expect(getProfileData(profileState)?.age).toEqual(data.age);
    });

    test('should work with empty state', () => {
        expect(Object.keys(getProfileData({})).length).toEqual(0);
    });
});

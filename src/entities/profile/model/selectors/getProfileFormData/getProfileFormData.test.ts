import { StateSchema } from 'app/providers/storeProvider';

import { getProfileFormData } from './getProfileFormData';

const data = {
    id: '1',
    username: 'admin',
    firstname: 'Роман',
    lastname: 'Белков',
    age: 28,
    country: { id: '123', name: { ru: '123', en: '123' } },
    city: { id: '123', country_id: '123', name: { ru: '123', en: '123' } },
    avatarSrc: 'https://test.com'
};
const profileState: StateSchema = {
    profile: {
        error: '',
        isLoading: false,
        isEdited: false,
        readonly: false,
        data: { ...data },
        formData: { ...data }
    }
};

describe('selector getProfileFormDataAge', () => {
    test('should return profile data age', () => {
        expect(getProfileFormData(profileState)?.age).toEqual(data.age);
    });

    test('should work with empty state', () => {
        expect(Object.keys(getProfileFormData({})).length).toEqual(0);
    });
});

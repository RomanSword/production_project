import { StateSchema } from 'app/providers/storeProvider';

import {
    getProfileFormDataAge,
    getProfileFormDataAvatar,
    getProfileFormDataCity,
    getProfileFormDataCountry,
    getProfileFormDataFirstname,
    getProfileFormDataLastname,
    getProfileFormDataUsername
} from './getProfileFormData';

const data = {
    id: '1',
    username: 'admin',
    firstname: 'Роман',
    lastname: 'Белков',
    age: 28,
    city: '1',
    country: '1',
    avatar: {
        src: 'https://test.com'
    }
};
const profileState: StateSchema = {
    profile: {
        error: '',
        isLoading: false,
        readonly: false,
        data: { ...data },
        formData: { ...data }
    }
};

describe('selector getProfileFormDataAge', () => {
    test('should return profile age', () => {
        expect(getProfileFormDataAge(profileState)).toEqual(data.age);
    });

    test('should work with empty state', () => {
        expect(getProfileFormDataAge({})).toEqual(undefined);
    });
});

describe('selector getProfileFormDataAvatar', () => {
    test('should return profile avatar src', () => {
        expect(getProfileFormDataAvatar(profileState)).toEqual(data.avatar.src);
    });

    test('should work with empty state', () => {
        expect(getProfileFormDataAvatar({})).toEqual(undefined);
    });
});

describe('selector getProfileFormDataCity', () => {
    test('should return profile city id', () => {
        expect(getProfileFormDataCity(profileState)).toEqual(data.city);
    });

    test('should work with empty state', () => {
        expect(getProfileFormDataCity({})).toEqual(undefined);
    });
});

describe('selector getProfileFormDataCountry', () => {
    test('should return profile country id', () => {
        expect(getProfileFormDataCountry(profileState)).toEqual(data.country);
    });

    test('should work with empty state', () => {
        expect(getProfileFormDataCountry({})).toEqual(undefined);
    });
});

describe('selector getProfileFormDataFirstname', () => {
    test('should return profile firstname', () => {
        expect(getProfileFormDataFirstname(profileState)).toEqual(data.firstname);
    });

    test('should work with empty state', () => {
        expect(getProfileFormDataFirstname({})).toEqual(undefined);
    });
});

describe('selector getProfileFormDataLastname', () => {
    test('should return profile lastname', () => {
        expect(getProfileFormDataLastname(profileState)).toEqual(data.lastname);
    });

    test('should work with empty state', () => {
        expect(getProfileFormDataLastname({})).toEqual(undefined);
    });
});

describe('selector getProfileFormDataUsername', () => {
    test('should return profile username', () => {
        expect(getProfileFormDataUsername(profileState)).toEqual(data.username);
    });

    test('should work with empty state', () => {
        expect(getProfileFormDataUsername({})).toEqual(undefined);
    });
});

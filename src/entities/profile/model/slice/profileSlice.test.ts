import { profileReducer, profileActions } from './profileSlice';
import { ProfileSchema } from '../types/profile';

const profileData = {
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
const profileState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    formData: { ...profileData },
    data: { ...profileData }
};
const newProfileData = {
    username: 'new_admin',
    firstname: 'Иван',
    lastname: 'Иванов',
    age: 33,
    city: '2',
    country: '2',
    avatar: {
        src: 'https://test.ru'
    }
};

describe('test slice profile', () => {
    test('test setDataAge', () => {
        const result = profileReducer(profileState, profileActions.setDataAge(newProfileData.age));

        expect(result.formData.age).toBe(newProfileData.age);
    });

    test('test setDataAvatar', () => {
        const result = profileReducer(
            profileState,
            profileActions.setDataAvatar(newProfileData.avatar.src)
        );

        expect(result.formData.avatar?.src).toBe(newProfileData.avatar.src);
    });

    test('test setDataCity', () => {
        const result = profileReducer(
            profileState,
            profileActions.setDataCity(newProfileData.city)
        );

        expect(result.formData.city).toBe(newProfileData.city);
    });

    test('test setDataCountry', () => {
        const result = profileReducer(
            profileState,
            profileActions.setDataCountry(newProfileData.country)
        );

        expect(result.formData.country).toBe(newProfileData.country);
    });

    test('test setDataFirstname', () => {
        const result = profileReducer(
            profileState,
            profileActions.setDataFirstname(newProfileData.firstname)
        );

        expect(result.formData.firstname).toBe(newProfileData.firstname);
    });

    test('test setDataLastname', () => {
        const result = profileReducer(
            profileState,
            profileActions.setDataLastname(newProfileData.lastname)
        );

        expect(result.formData.lastname).toBe(newProfileData.lastname);
    });

    test('test setDataUsername', () => {
        const result = profileReducer(
            profileState,
            profileActions.setDataUsername(newProfileData.username)
        );

        expect(result.formData.username).toBe(newProfileData.username);
    });

    test('test resetFormData', () => {
        const result = profileReducer(
            {
                ...profileState,
                formData: {
                    ...profileState.formData,
                    age: newProfileData.age
                }
            },
            profileActions.resetFormData()
        );

        expect(result.formData.age).toBe(profileData.age);
    });

    test('test applyFormData', () => {
        const result = profileReducer(
            {
                ...profileState,
                formData: {
                    ...profileState.formData,
                    age: newProfileData.age
                }
            },
            profileActions.applyFormData()
        );

        expect(result.data.age).toBe(newProfileData.age);
    });

    test('test clear', () => {
        const result = profileReducer(profileState, profileActions.clear());

        expect(Object.keys(result.data).length).toBe(0);
        expect(Object.keys(result.formData).length).toBe(0);
    });
});

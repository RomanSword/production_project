import { PROFILE_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

import { profileReducer, profileActions } from './profileSlice';
import { ProfileSchema } from '../types/profile';

const profileData = {
    id: '1',
    username: 'admin',
    firstname: 'Роман',
    lastname: 'Белков',
    age: 28,
    country: { id: '123', name_ru: '123', name_en: '123' },
    city: { id: '123', country_id: '123', name_ru: '123', name_en: '123' },
    avatar_src: 'https://test.com'
};
const profileState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    isEdited: false,
    isInited: false,
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
    avatar_src: 'https://test.ru'
};
const newLoginValue = { id: '123', firstname: '123' };

describe('test slice profile', () => {
    test('test setFormDataField age', () => {
        const result = profileReducer(
            profileState,
            profileActions.setFormDataField({ key: 'age', value: newProfileData.age })
        );

        expect(result.formData.age).toBe(newProfileData.age);
    });

    test('test cancelEdit', () => {
        const result = profileReducer(
            {
                ...profileState,
                formData: {
                    ...profileState.formData,
                    age: newProfileData.age
                }
            },
            profileActions.cancelEdit()
        );

        expect(result.formData.age).toBe(profileData.age);
    });

    test('test clear', () => {
        const result = profileReducer(profileState, profileActions.clear());

        expect(Object.keys(result.data).length).toBe(0);
        expect(Object.keys(result.formData).length).toBe(0);
    });

    test('test set auth data', () => {
        const result = profileReducer(profileState, profileActions.setAuthData(newLoginValue));

        expect(result.data.id).toBe(newLoginValue.id);
        expect(result.data.firstname).toBe(newLoginValue.firstname);
    });

    test('test init auth data', () => {
        localStorage.setItem(PROFILE_LOCAL_STORAGE_KEY, JSON.stringify(newLoginValue));

        const result = profileReducer(profileState, profileActions.initAuthData());

        expect(result.data.id).toBe(newLoginValue.id);
    });

    test('test clear state', () => {
        localStorage.setItem(PROFILE_LOCAL_STORAGE_KEY, JSON.stringify(newLoginValue));

        const result = profileReducer(profileState, profileActions.clear());

        expect(Object.keys(result.data).length).toBe(0);
    });
});

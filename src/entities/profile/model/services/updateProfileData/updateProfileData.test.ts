import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';

import { updateProfileData } from './updateProfileData';

const profileValue = {
    id: '1',
    username: 'admin',
    firstname: 'Роман',
    lastname: 'Белков',
    age: 28,
    city_id: '1',
    country_id: '1',
    avatarSrc: 'https://test.com'
};

const profileState = {
    isLoading: false,
    isEdited: false,
    readonly: false,
    data: profileValue,
    formData: profileValue
};

describe('test service updateProfileData', () => {
    test('success updateProfileData', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: profileState });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileValue }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 3 раза
        expect(thunk.api.put).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('fulfilled'); // Статус исполнено в async thunk
        expect(result.payload).toEqual(profileValue);
    });

    test('validation error updateProfileData', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                ...profileState,
                formData: {
                    ...profileState.formData,
                    username: '',
                    firstname: '',
                    lastname: '',
                    age: 1
                }
            }
        });
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 2 раза
        expect(result.meta.requestStatus).toBe('rejected'); // Статус отказано в async thunk
    });

    test('server error updateProfileData', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: profileState });
        thunk.api.put.mockReturnValue(Promise.reject({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 2 раза
        expect(thunk.api.put).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('rejected'); // Статус отказано в async thunk
    });
});

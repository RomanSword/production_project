import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';

import { fetchProfileDataById } from './fetchProfileDataById';

const profileValue = {
    id: '1',
    username: 'admin',
    firstname: 'Роман',
    lastname: 'Белков',
    age: 28,
    city: '1',
    country: '1',
    avatar_src: 'https://test.com'
};

describe('test service fetchProfileDataById', () => {
    test('success fetchProfileDataById', async () => {
        const thunk = new TestAsyncThunk(fetchProfileDataById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileValue }));
        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 3 раза
        expect(thunk.api.get).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('fulfilled'); // Статус исполнено в async thunk
        expect(result.payload).toEqual(profileValue);
    });

    test('error fetchProfileDataById', async () => {
        const thunk = new TestAsyncThunk(fetchProfileDataById);
        thunk.api.get.mockReturnValue(Promise.reject({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 2 раза
        expect(thunk.api.get).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('rejected'); // Статус отказано в async thunk
    });
});

import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { userActions } from 'entities/user';

import { loginByUsername } from './loginByUsername';

const userValue = { username: '123', password: '123', id: '1' };

describe('test service loginByUsername', () => {
    test('success login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk(userValue);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue)); // Отработал ли экшн в редюсере через диспатч
        expect(thunk.dispatch).toHaveBeenCalledTimes(3); // Отработал ли диспатч 3 раза
        expect(thunk.api.post).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('fulfilled'); // Статус исполнено в async thunk
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.reject({ status: 403 }));
        const result = await thunk.callThunk(userValue);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 2 раза
        expect(thunk.api.post).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('rejected'); // Статус отказано в async thunk
    });
});

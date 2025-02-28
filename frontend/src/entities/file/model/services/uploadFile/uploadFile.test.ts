import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';

import { uploadFile } from './uploadFile';

const fileValue = {
    src: 'https://test.com'
};

// Создаем тестовый файл
const blob = new Blob([fileValue.src]);
const file = new File([blob], 'values.json', {
    type: 'application/JSON'
});

describe('test service uploadFile', () => {
    test('success uploadFile', async () => {
        const thunk = new TestAsyncThunk(uploadFile);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: fileValue }));
        const result = await thunk.callThunk(file);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 3 раза
        expect(thunk.api.post).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('fulfilled'); // Статус исполнено в async thunk
        expect(result.payload).toEqual(fileValue);
    });

    test('error uploadFile', async () => {
        const thunk = new TestAsyncThunk(uploadFile);
        thunk.api.post.mockReturnValue(Promise.reject({ status: 403 }));
        const result = await thunk.callThunk(file);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 2 раза
        expect(thunk.api.post).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('rejected'); // Статус отказано в async thunk
    });
});

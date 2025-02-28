import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';

import { articleDetailsMockData } from 'shared/mocks/api';

import { fetchArticleById } from './fetchArticleById';

describe('test service fetchArticleById', () => {
    test('success fetchArticleById', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: articleDetailsMockData }));
        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 3 раза
        expect(thunk.api.get).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('fulfilled'); // Статус исполнено в async thunk
        expect(result.payload).toEqual(articleDetailsMockData);
    });

    test('error fetchArticleById', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.reject({ status: 403 }));
        const result = await thunk.callThunk('2');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 2 раза
        expect(thunk.api.get).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('rejected'); // Статус отказано в async thunk
    });
});

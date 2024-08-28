import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';

import { fetchCountriesData } from './fetchCountriesData';

const countriesValue = [
    {
        id: '1',
        name: {
            ru: 'Россия',
            en: 'Russia'
        }
    }
];

describe('test service fetchCountriesData', () => {
    test('success fetchCountriesData', async () => {
        const thunk = new TestAsyncThunk(fetchCountriesData);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: countriesValue }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 3 раза
        expect(thunk.api.post).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('fulfilled'); // Статус исполнено в async thunk
        expect(result.payload).toEqual(countriesValue);
    });

    test('error fetchCountriesData', async () => {
        const thunk = new TestAsyncThunk(fetchCountriesData);
        thunk.api.post.mockReturnValue(Promise.reject({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 2 раза
        expect(thunk.api.post).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('rejected'); // Статус отказано в async thunk
    });
});
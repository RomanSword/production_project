import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';

import { fetchCitiesData } from './fetchCitiesData';

const citiesValue = [
    {
        id: '1',
        country_id: '1',
        name_ru: 'Москва',
        name_en: 'Moscow'
    }
];

describe('test service fetchCitiesData', () => {
    test('success fetchCitiesData', async () => {
        const thunk = new TestAsyncThunk(fetchCitiesData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: citiesValue }));
        const result = await thunk.callThunk({ country_id: citiesValue[0].country_id });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 3 раза
        expect(thunk.api.get).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('fulfilled'); // Статус исполнено в async thunk
        expect(result.payload).toEqual(citiesValue);
    });

    test('error fetchCitiesData', async () => {
        const thunk = new TestAsyncThunk(fetchCitiesData);
        thunk.api.get.mockReturnValue(Promise.reject({ status: 403 }));
        const result = await thunk.callThunk({ country_id: citiesValue[0].country_id });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Отработал ли диспатч 2 раза
        expect(thunk.api.get).toHaveBeenCalled(); // Вызван ли пост запрос
        expect(result.meta.requestStatus).toBe('rejected'); // Статус отказано в async thunk
    });
});

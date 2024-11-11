import { StateSchema } from 'app/providers/storeProvider';

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from './articleDetails';

const error = 'error';
const isLoading = true;
const data = {
    id: '123'
};
const state: StateSchema = {
    articleDetails: {
        error,
        isLoading,
        data
    }
};

describe('selector getArticleDetailsData', () => {
    test('should return data from articleDetails state', () => {
        expect(getArticleDetailsData(state)?.id).toEqual(data.id);
    });

    test('should work with empty state', () => {
        expect(getArticleDetailsData({})).toEqual(undefined);
    });
});

describe('selector getArticleDetailsError', () => {
    test('should return error from articleDetails state', () => {
        expect(getArticleDetailsError(state)).toEqual(error);
    });

    test('should work with empty state', () => {
        expect(getArticleDetailsError({})).toEqual(undefined);
    });
});

describe('selector getArticleDetailsIsLoading', () => {
    test('should return isLoading from articleDetails state', () => {
        expect(getArticleDetailsIsLoading(state)).toEqual(isLoading);
    });

    test('should work with empty state', () => {
        expect(getArticleDetailsIsLoading({})).toEqual(false);
    });
});

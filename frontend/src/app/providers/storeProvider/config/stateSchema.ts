import { AxiosInstance } from 'axios';
import { To, NavigateOptions } from 'react-router-dom';
import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { ArticleDetailsSchema } from 'entities/article';
import { CountriesSchema } from 'entities/countries';
import { CitiesSchema } from 'entities/city';
import { FileSchema } from 'entities/file';
import { ProfileSchema } from 'entities/profile';

import { LoginSchema } from 'features/loginByUsername';
import { CommentFormSchema } from 'features/commentForm';

import { ArticleDetailsCommentsSchema } from 'pages/articleDetails';

import { ModalSchema } from 'widgets/modalButtonOpener';

export interface StateSchema {
    modal?: ModalSchema;
    profile?: ProfileSchema;

    // Асинхронные редюсеры
    login?: LoginSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    commentForm?: CommentFormSchema;

    // Переиспользуемые асинхронные редьюсеры
    file?: FileSchema;
    countries?: CountriesSchema;
    cities?: CitiesSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reduce: (state: StateSchema, action: Action) => { [x: string]: any };
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}

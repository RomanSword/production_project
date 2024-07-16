import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { CounterSchema } from 'entities/counter';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';

import { LoginSchema } from 'features/authByUsername';

export interface StateSchema {
    counter?: CounterSchema;
    user?: UserSchema;

    // Асинхронные редюсеры
    login?: LoginSchema;
    profile?: ProfileSchema;
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

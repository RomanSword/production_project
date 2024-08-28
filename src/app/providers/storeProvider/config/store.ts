/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';

import { userReducer } from 'entities/user';
import { api } from 'shared/api/api';
import { ReducerList } from 'shared/lib/components';

import { StateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducerList,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject = {
        ...asyncReducers,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        // @ts-ignore
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api,
                        navigate
                    }
                }
            })
    });

    return { ...store, reducerManager };
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

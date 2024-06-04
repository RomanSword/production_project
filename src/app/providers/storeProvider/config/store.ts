import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/counter';

import { StateSchema } from './stateSchema';
import { userReducer } from 'entities/user';

export function createReduxStore(initialState?: StateSchema) {
    const reducer: ReducersMapObject = {
        counter: counterReducer,
        user: userReducer
    };

    return configureStore<StateSchema>({
        reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}

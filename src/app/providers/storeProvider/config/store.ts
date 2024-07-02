import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/authByUsername';

import { StateSchema } from './stateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const reducer: ReducersMapObject = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer
    };

    return configureStore<StateSchema>({
        reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

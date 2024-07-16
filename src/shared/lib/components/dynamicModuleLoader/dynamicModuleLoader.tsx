import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { FCCP } from 'app/types/declarations';
import {
    ReduxStoreWithManager,
    StateSchemaKey
} from 'app/providers/storeProvider/config/stateSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Reducer } from 'redux';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FCCP<DynamicModuleLoaderProps> = props => {
    const { reducers, removeAfterUnmount = true, children } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            // Добавляем чанк редюсир для логин формы
            store.reducerManager.add(name, reducer);
            // Руками пишем action в стор для удобства
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
                    // Удаляем чанк из стора при выходе с формы
                    store.reducerManager.remove(name);
                    // Также пишем в стор про удаление чанка
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, [dispatch, store.reducerManager, reducers, removeAfterUnmount]);

    return children;
};

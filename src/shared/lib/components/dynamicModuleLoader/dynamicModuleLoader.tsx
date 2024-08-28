import { useEffect, useState } from 'react';
import { Reducer } from 'redux';
import { useStore } from 'react-redux';

import { FCCP } from 'app/types/declarations';
import {
    ReduxStoreWithManager,
    StateSchemaKey
} from 'app/providers/storeProvider/config/stateSchema';
import { useAppDispatch } from 'shared/lib/hooks';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FCCP<DynamicModuleLoaderProps> = props => {
    const { reducers, removeAfterUnmount = true, children } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();
    const [isLoading, changeIsLoading] = useState(true);

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            // Добавляем чанк редюсир для логин формы
            store.reducerManager.add(name as StateSchemaKey, reducer);
            // Руками пишем action в стор для удобства
            dispatch({ type: `@INIT ${name} reducer` });
        });

        // Не даем даже смаунтиться дочерним элементам, чтобы не пропустить
        // вперед лишние асинк санки
        changeIsLoading(false);

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    // Удаляем чанк из стора при выходе с формы
                    store.reducerManager.remove(name as StateSchemaKey);
                    // Также пишем в стор про удаление чанка
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, [dispatch, store.reducerManager, reducers, removeAfterUnmount]);

    if (isLoading) {
        return <></>;
    }

    return children;
};

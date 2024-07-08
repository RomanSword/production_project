import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { ReducerList } from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';

import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: ReducerList;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(initialState, asyncReducers);

    return <Provider store={store}>{children}</Provider>;
};

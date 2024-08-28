import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReducerList } from 'shared/lib/components';

import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: ReducerList;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const navigate = useNavigate();

    const store = createReduxStore(initialState, asyncReducers, navigate);

    return <Provider store={store}>{children}</Provider>;
};

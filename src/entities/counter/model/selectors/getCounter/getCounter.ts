import { StateSchema } from 'app/providers/storeProvider';

import { CounterSchema } from '../../types/counterSchema';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;

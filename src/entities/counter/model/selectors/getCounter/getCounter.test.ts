import { StateSchema } from 'app/providers/storeProvider';

import { getCounter } from './getCounter';

const counterState: StateSchema = { counter: { value: 10 } };

describe('selector getCounter', () => {
    test('should return counter state', () => {
        expect(getCounter(counterState)).toEqual(counterState.counter);
    });
});

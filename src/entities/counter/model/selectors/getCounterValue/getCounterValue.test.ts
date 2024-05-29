import { StateSchema } from 'app/providers/storeProvider';

import { getCounterValue } from './getCounterValue';

const counterState: StateSchema = { counter: { value: 10 } };

describe('selector getCounterValue', () => {
    test('should return counter value', () => {
        expect(getCounterValue(counterState)).toEqual(counterState.counter.value);
    });
});

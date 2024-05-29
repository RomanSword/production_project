import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions, initialState } from './counterSlice';

const counterState: CounterSchema = { value: 10 };

describe('slice counter', () => {
    test('should return counter state with DECREMENTED value', () => {
        expect(counterReducer(counterState, counterActions.decrement())).toEqual({
            value: counterState.value - 1
        });
    });

    test('should return counter state with INCREMENTED value', () => {
        expect(counterReducer(counterState, counterActions.increment())).toEqual({
            value: counterState.value + 1
        });
    });

    test('should return INITIAL counter state with INCREMENTED value', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: initialState.value + 1
        });
    });
});

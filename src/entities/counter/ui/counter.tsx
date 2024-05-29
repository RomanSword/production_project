import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'shared/ui';

import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid='counter-value'>{counterValue}</h1>

            <Button
                data-testid='increment-button'
                onClick={increment}
            >
                _+_
            </Button>
            <Button
                data-testid='decrement-button'
                onClick={decrement}
            >
                _-_
            </Button>
        </div>
    );
};

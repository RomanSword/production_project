import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/componentRender/componentRender';

import { Counter } from './counter';

const counterValue = 10;
const initialState = { counter: { value: counterValue } };

describe('Entity Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, { initialState });

        const counter = screen.getByTestId('counter-value');
        expect(counter).toHaveTextContent(String(counterValue));
    });

    test('test INCREMENT', () => {
        componentRender(<Counter />, { initialState });

        const counter = screen.getByTestId('counter-value');
        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.click(incrementButton);
        expect(counter).toHaveTextContent(String(counterValue + 1));
    });

    test('test INCREMENT and DECREMENT', () => {
        componentRender(<Counter />, { initialState });

        const counter = screen.getByTestId('counter-value');
        const decrementButton = screen.getByTestId('decrement-button');
        fireEvent.click(decrementButton);
        expect(counter).toHaveTextContent(String(counterValue - 1));
    });
});

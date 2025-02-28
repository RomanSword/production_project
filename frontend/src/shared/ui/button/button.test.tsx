import { screen, render } from '@testing-library/react';

import { Button, ButtonTheme } from './button';

describe('shared ui button', () => {
    test('simple render', () => {
        render(<Button>Test</Button>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('render with theme prop', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);

        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});

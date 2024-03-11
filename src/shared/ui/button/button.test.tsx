import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import { Button } from './button';

test('simple render', () => {
    render(<Button>Test</Button>);

    expect(screen.getByText('Test')).toBeInTheDocument();
});

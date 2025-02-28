import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/componentRender/componentRender';

import { SideBar } from './sideBar';

describe('widget sideBar', () => {
    test('test toggle', () => {
        componentRender(<SideBar />, {});
        const sideBar = screen.getByTestId('sideBar');
        expect(sideBar).toBeInTheDocument();

        const toggleButton = screen.getByTestId('sideBar-toggle');
        fireEvent.click(toggleButton);
        expect(sideBar).toHaveClass('collapsed');
    });
});

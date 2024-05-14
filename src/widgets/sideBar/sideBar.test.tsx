import { fireEvent, screen } from '@testing-library/react';

import { SideBar } from './sideBar';
import { componentRender } from 'shared/lib/componentRender/componentRender';

test('simple render', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sideBar')).toBeInTheDocument();
});

test('test toggle', () => {
    componentRender(<SideBar />);
    const sideBar = screen.getByTestId('sideBar');
    expect(sideBar).toBeInTheDocument();
    const toggleButton = screen.getByTestId('sideBar-toggle');
    fireEvent.click(toggleButton);
    expect(sideBar).toHaveClass('collapsed');
});

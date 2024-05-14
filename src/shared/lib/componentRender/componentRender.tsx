import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import i18nTest from 'shared/config/i18nTest';

export function componentRender(component: ReactNode, route?: string) {
    return render(
        <MemoryRouter initialEntries={[route || '/']}>
            <I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
        </MemoryRouter>
    );
}

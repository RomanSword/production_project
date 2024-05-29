import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import i18nTest from 'shared/config/i18nTest';

export interface IOptions {
    route?: string;
    initialState?: StateSchema;
}

export function componentRender(component: ReactNode, options: IOptions) {
    const { initialState, route = '/' } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}

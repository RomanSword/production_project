import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { StoreProvider } from 'app/providers/storeProvider';
import { Theme, ThemeProvider } from 'app/providers/themeProvider';
import i18nConfig from 'shared/config/i18n';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const I18nDecorator = (Story: any, context: any) => {
    const { locale } = context.globals;

    useEffect(() => {
        i18nConfig.changeLanguage(locale);
    }, [locale]);

    return (
        <Suspense fallback={<div>Загрузка переводов...</div>}>
            <I18nextProvider i18n={i18nConfig}>
                <Story />
            </I18nextProvider>
        </Suspense>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const routerDecorator = (Story: any) => {
    return (
        <MemoryRouter>
            <Routes>
                <Route
                    path='/*'
                    element={<Story />}
                />
            </Routes>
        </MemoryRouter>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const themeLightDecorator = (Story: any) => {
    return (
        <div className='app light'>
            <ThemeProvider themeName={Theme.LIGHT}>
                <Story />
            </ThemeProvider>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const themeDarkDecorator = (Story: any) => {
    return (
        <div className='app dark'>
            <ThemeProvider themeName={Theme.DARK}>
                <Story />
            </ThemeProvider>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const storeDecorator = (Story: any) => {
    return (
        <StoreProvider>
            <Story />
        </StoreProvider>
    );
};

export const decorators = [I18nDecorator, routerDecorator];
export const pageDecorators = [storeDecorator, I18nDecorator, routerDecorator];

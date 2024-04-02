import { ThemeProvider } from 'app/providers/themeProvider';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import i18nConfig from 'shared/config/i18n';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const i18nDecorator = (Story: any, context: any) => {
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
const themeDecorator = (Story: any) => {
    return (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    );
};

export const decorators = [i18nDecorator, routerDecorator, themeDecorator];

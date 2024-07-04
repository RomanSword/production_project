/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { Theme, ThemeProvider } from 'app/providers/themeProvider';
import i18nConfig from 'shared/config/i18n';

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

const themeDecoratorContent = (Story: any, theme: Theme) => {
    return (
        <div className={`app ${theme}`}>
            <ThemeProvider themeName={theme}>
                <Story />
            </ThemeProvider>
        </div>
    );
};

export const themeLightDecorator = (Story: any) => {
    return themeDecoratorContent(Story, Theme.LIGHT);
};

export const themeDarkDecorator = (Story: any) => {
    return themeDecoratorContent(Story, Theme.DARK);
};

export const storeDecorator = (Story: any, initialState: StateSchema) => {
    return (
        <StoreProvider initialState={initialState}>
            <Story />
        </StoreProvider>
    );
};

export const emptyStoreDecorator = (Story: any) => {
    return (
        <StoreProvider>
            <Story />
        </StoreProvider>
    );
};

export const decorators = [I18nDecorator, routerDecorator];
export const pageDecorators = [emptyStoreDecorator, I18nDecorator, routerDecorator];

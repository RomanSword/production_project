import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AppWrapper, AppLayout } from 'app';
import { ErrorBoundary } from 'app/providers/errorBoundary';
import { StoreProvider } from 'app/providers/storeProvider';
import { ThemeProvider } from 'app/providers/themeProvider';

import 'app/styles/index.scss';
import { initI18n } from 'shared/config/i18n';

initI18n();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <AppWrapper>
                    <ErrorBoundary>
                        <AppLayout />
                    </ErrorBoundary>
                </AppWrapper>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
);

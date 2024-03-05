import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AppWrapper, AppLayout } from 'app';
import { ThemeProvider } from 'app/providers/themeProvider';
import { ErrorBoundary } from 'app/providers/errorBoundary';

import 'shared/config/i18n';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <AppWrapper>
                <ErrorBoundary>
                    <AppLayout />
                </ErrorBoundary>
            </AppWrapper>
        </ThemeProvider>
    </BrowserRouter>
);

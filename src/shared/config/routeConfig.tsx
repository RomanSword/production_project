import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main';
import { HelpPage } from 'pages/help';
import { NotFoundPage } from 'pages/notFound';

export enum AppRoutes {
    MAIN = 'main',
    HELP = 'help',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.HELP]: '/help',
    [AppRoutes.NOT_FOUND]: '*' // Сработает когда не сработал ни один из других
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.HELP]: {
        path: RoutePath.help,
        element: <HelpPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};

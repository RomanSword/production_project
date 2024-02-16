import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main';
import { HelpPage } from 'pages/help';

export enum AppRoutes {
    MAIN = 'main',
    HELP = 'help'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.HELP]: '/help'
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.HELP]: {
        path: RoutePath.help,
        element: <HelpPage />
    }
};

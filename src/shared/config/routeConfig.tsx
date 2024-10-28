import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main';
import { HelpPage } from 'pages/help';
import { ProfilePage } from 'pages/profile';
import { ArticleListPage } from 'pages/articleList';
import { ArticleDetailsPage } from 'pages/articleDetails';
import { NotFoundPage } from 'pages/notFound';
import { AccessDeniedPage } from 'pages/accessDenied';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = 'main',
    HELP = 'help',
    PROFILE = 'profile',
    ARTICLE_LIST = 'articles',
    ARTICLE_DETAILS = 'article',
    NOT_FOUND = 'not_found',
    ACCESS_DEINED = 'access_denied'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.HELP]: '/help',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLE_LIST]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
    [AppRoutes.ACCESS_DEINED]: '/access_denied',
    [AppRoutes.NOT_FOUND]: '*' // Сработает когда не сработал ни один из других
};

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.HELP]: {
        path: RoutePath.help,
        element: <HelpPage />
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.ARTICLE_LIST]: {
        path: RoutePath.articles,
        element: <ArticleListPage />,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    },
    [AppRoutes.ACCESS_DEINED]: {
        path: RoutePath.access_denied,
        element: <AccessDeniedPage />
    }
};

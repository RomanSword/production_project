import { ReactElement, Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps, RouteConfig } from 'shared/config';
import { PageLoader } from 'widgets';

import { RequireAuth } from './requireAuth';

const AppRouter = (): ReactElement => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className='content'>{route.element}</div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return <Routes>{Object.values(RouteConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);

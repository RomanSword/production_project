import { ReactElement, Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { getUsername } from 'entities/user';
import { RouteConfig } from 'shared/config';
import { PageLoader } from 'widgets';

const AppRouter = (): ReactElement => {
    const isAuth = useSelector(getUsername);

    const routes = useMemo(() => {
        return Object.values(RouteConfig).filter(route => {
            return !(route.authOnly && !isAuth);
        });
    }, [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => {
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={<div className='content'>{element}</div>}
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);

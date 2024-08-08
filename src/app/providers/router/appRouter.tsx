import { ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouteConfig } from 'shared/config';
import { PageLoader } from 'widgets';

const AppRouter = (): ReactElement => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(RouteConfig).map(({ element, path }) => {
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

export default AppRouter;

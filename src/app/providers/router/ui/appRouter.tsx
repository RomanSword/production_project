import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Spinner } from 'shared/ui';
import { routeConfig } from 'shared/config/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                {
                    Object.values(routeConfig).map(({ element, path }) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    <div className='content'>
                                        {element}
                                    </div>
                                }
                            />
                        );
                    })
                }
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
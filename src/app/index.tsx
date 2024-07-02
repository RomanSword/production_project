import { ReactElement, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FCC } from 'app/types/declarations';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib';
import { NavBar, SideBar } from 'widgets';
import { userActions } from 'entities/user';

export const AppWrapper: FCC = ({ children }): ReactElement => {
    const { theme } = useTheme();

    return <div className={classNames(['app', theme])}>{children}</div>;
};

export function AppLayout(): ReactElement {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <Suspense fallback=''>
            <NavBar />

            <div className='content-wrapper'>
                <SideBar />
                <AppRouter />
            </div>
        </Suspense>
    );
}

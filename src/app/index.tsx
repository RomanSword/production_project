import { ReactElement, Suspense, useEffect } from 'react';

import { classNames } from 'shared/lib';

import { useTheme } from 'app/providers/themeProvider';
import { FCC } from 'app/types/declarations';
import { AppRouter } from 'app/providers/router';
import { NavBar, SideBar } from 'widgets';

import './styles/index.scss';

export const AppWrapper: FCC = ({ children }): ReactElement => {
    const { theme } = useTheme();

    return <div className={classNames(['app', theme])}>{children}</div>;
};

export const AppLayout = (): ReactElement => {
    useEffect(() => {
        if (Math.random() > 0.5) {
            throw new Error();
        }
    }, []);

    return (
        <Suspense fallback=''>
            <NavBar />

            <div className='content-wrapper'>
                <SideBar />
                <AppRouter />
            </div>
        </Suspense>
    );
};

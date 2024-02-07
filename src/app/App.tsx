import { Suspense } from 'react';

import { classNames } from 'shared/lib';

import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar, SideBar } from 'widgets';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames(['app', theme])}>
            <Suspense fallback=''>
                <NavBar />

                <div className='content-wrapper'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;

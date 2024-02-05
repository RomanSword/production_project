import { classNames } from 'shared/lib';

import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar, SideBar } from 'widgets';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames(['app', theme])}>
            <NavBar />

            <div className='content-wrapper'>
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
}

export default App;

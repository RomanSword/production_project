import { classNames } from 'shared/lib/classNames';

import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';

import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
}

export default App;

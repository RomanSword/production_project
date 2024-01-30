import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { Spinner } from 'shared/components';
import { classNames } from 'shared/lib/classNames';

import { useTheme } from 'app/providers/themeProvider';

import { AboutPage } from 'pages/about';
import { MainPage } from 'pages/main';

import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>

            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>

            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;

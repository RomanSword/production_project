import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { Spinner } from './components';

import { AboutPageAsync } from './pages/About/AboutPage.async';
import { MainPageAsync } from './pages/Main/MainPage.async';

import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

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
                    <Route path='/about' element={<AboutPageAsync />} />
                    <Route path='/' element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;

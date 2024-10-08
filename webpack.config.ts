import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };

    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const host = env.host || '0.0.0.0';
    const baseURL = env.baseURL || 'http://localhost:8000';

    return buildWebpackConfig({
        paths,
        mode,
        port,
        host,
        baseURL,
        isDev: mode === 'development',
        project: 'frontend'
    });
};

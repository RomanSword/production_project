import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildImageLoader } from './loaders/buildImageLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const imageLoader = buildImageLoader();
    const svgLoader = buildSvgLoader();

    // Если не используем ts, то тут понадобится babel-loader
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const cssLoader = buildCssLoader(options.isDev);

    const babelLoader = {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    };

    return [imageLoader, svgLoader, babelLoader, tsLoader, cssLoader];
}

import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildImageLoader } from './loaders/buildImageLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const imageLoader = buildImageLoader();
    const svgLoader = buildSvgLoader();

    // Если не используем ts, то тут понадобится babel-loader
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /json-server/]
    };

    const cssLoader = buildCssLoader(options.isDev);
    const babelLoader = buildBabelLoader(options.isDev);

    return [imageLoader, svgLoader, babelLoader, tsLoader, cssLoader];
}

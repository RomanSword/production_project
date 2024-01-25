import webpack from 'webpack';

import { BuildOptions } from './types/config';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    const config: webpack.Configuration = {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(),
        module: {
            rules: buildLoaders(options)
        },
    };

    if (isDev) {
        config.devServer = BuildDevServer(options);
        config.devtool = 'inline-source-map';
    }

    return config;
}

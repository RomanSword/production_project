import webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev, baseURL } = options;

    const plugins = [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
            chunkFilename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev),
            __BASE_URL__: JSON.stringify(baseURL)
        })
    ];

    // Раскоментировать если нужен запущенный анализатор билда
    // if (isDev) {
    //     plugins.push(
    //         new BundleAnalyzerPlugin({
    //             openAnalyzer: false
    //         })
    //     );
    // }

    return plugins;
}

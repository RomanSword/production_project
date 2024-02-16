import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const imageLoader = {
        test: /\.(png|jpe?g)$/i,
        use: [{ loader: 'file-loader' }]
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    // Если не используем ts, то тут понадобится babel-loader
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const cssLoader = {
        test: /\.s(a|c)ss$/,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                    sourceMap: options.isDev
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: options.isDev
                }
            }
        ]
    };

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

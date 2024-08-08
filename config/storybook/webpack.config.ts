import path from 'path';
import webpack, { RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildImageLoader } from '../build/loaders/buildImageLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    config.resolve!.modules!.push(path.resolve(__dirname, '../../src'));
    config.resolve!.extensions!.push('.ts', '.tsx');
    config.resolve!.alias = {
        entities: path.resolve(__dirname, '..', '..', 'src', 'entities')
    };

    config.module!.rules = config.module!.rules!.map(
        (rule: undefined | null | false | '' | '...' | 0 | RuleSetRule) => {
            if (
                rule !== '...' &&
                rule &&
                rule.test instanceof RegExp &&
                rule.test.toString().includes('svg')
            ) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        }
    );

    config.module!.rules.push(buildCssLoader(true));
    config.module!.rules.push(buildImageLoader());
    config.module!.rules.push(buildSvgLoader());

    config.plugins!.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
            __BASE_URL__: ''
        })
    );

    return config;
};

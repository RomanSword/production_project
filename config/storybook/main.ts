import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic'
                }
            }
        }
    }),
    docs: {
        autodocs: 'tag'
    },
    core: {
        disableTelemetry: true
    },
    // Нужно для того, чтобы сторибук увидел папку с переводами
    staticDirs: ['../../public']
};

export default config;

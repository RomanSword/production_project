import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export function BuildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        host: options.host,
        port: options.port,
        historyApiFallback: true,
        open: false,
        hot: true,
        client: {
            progress: true,
            overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: true
            }
        }
    };
}

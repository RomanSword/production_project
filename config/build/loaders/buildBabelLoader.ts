export function buildBabelLoader(isDev: boolean) {
    return {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/, /json-server/],
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean)
            }
        }
    };
}

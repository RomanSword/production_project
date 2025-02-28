export function buildImageLoader() {
    return {
        test: /\.(png|jpe?g)$/i,
        use: [{ loader: 'file-loader' }]
    };
}

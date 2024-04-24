module.exports = {
    style: {
        postcss: {
            plugins: [
                require('postcss-import'),
                require('postcss-url')(),
                require('postcss-preset-env')({ stage: 0 }),
                require('resolve-url-loader'),
            ],
        },
    },
};

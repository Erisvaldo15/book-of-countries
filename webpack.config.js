const path = require('path');

module.exports = {

    mode: 'development',
    devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : '',

    entry: {
        index: ['./src/index.js'],
        country: ['./src/country.js'],
    },

    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};

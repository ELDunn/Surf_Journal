const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // target: 'node',
    mode:'development',
    entry: './src/Client/index.js', 
    output:{ 
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    stats:{
        children: true
    },

    devServer: {
        historyApiFallback: true,
        static: {
          publicPath: '/build',
          directory: path.resolve(__dirname, '/build'),
        },

        proxy: {
            '/api': 'http://localhost:3000',
        },
        port: '8080',
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/Client/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    resolve: { modules: ['node_modules'] }
}
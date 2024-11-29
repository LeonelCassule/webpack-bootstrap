const path = require('path');
// Arquivos do Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'./src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'style.css',
       })
    ],
    module:{
        rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.css$/i,
                use:[
                'css-loader',
                'sass-loader'
                ]
        },
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        }
        ]
    }
}
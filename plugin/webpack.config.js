const path = require('path');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // mode: 'development',
    entry: {
        plugin: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'plugin',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    externals: {
        '@angular/core': 'vendor.ng.core',
        '@angular/common': 'vendor.ng.common',
        'rxjs': 'vendor.rxjs',
        'rxjs/operators': 'vendor.rxjs.operators',
    },
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[fullhash].[ext]',
                }
            }, {
                test: /\.css$/,
                exclude: path.resolve(__dirname, "src"),
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }, {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './src/index#PluginModule',
            sourceMap: false,
            suppressZoneJsIncompatibilityWarning: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ]
}
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const uglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"
        // print: "./src/print.js"
    },
    plugins: [
        new CleanWebpackPlugin(["dist/*.*"], {
            exclude: [ "index.html" ]
        }),
        new HtmlWebpackPlugin({
            title: "Webpack Demos, Get Start"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new uglifyJSPlugin()
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    // devServer: {
    //     contentBase: "./dist",
    //     hot: true
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }, {
                test: /\.(jpg|png|svg|gif)$/,
                use: [
                    "file-loader"
                ]
            }, {
                test: /\.(ttf|woff|woff2|otf|eot)$/,
                use: [
                    "file-loader"
                ]
            }, {
                test: /\.xml$/,
                use: [
                    "xml-loader"
                ]
            }
        ]
    }
};

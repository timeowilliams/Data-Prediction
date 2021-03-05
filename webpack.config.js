const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: { 
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            process: "process/browser"
        }
    },
    devServer: { 
        contentBase: path.join(__dirname, "src"),
        proxy: {
            '/api' : 'http://localhost:3000'
        }
    },
    module: {
        rules: [
            {   //Listen for react files
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {   //Listen for style files
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {   //listen for image uploads
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser'
     })
    ]
};
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : "style-loader";

const config = {
    target: 'web',
    entry: {
        index: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        open: true,
        host: "0.0.0.0",
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),

        new CopyPlugin([
            {
                from: path.resolve(__dirname, "./node_modules/blockly/media"),
                to: path.resolve(__dirname, "dist/media")
            }
        ])
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: "asset",
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        config.plugins.push(new MiniCssExtractPlugin());

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
    }
    return config;
};

const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, '.'),
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    node: {
        "fs": "empty"
    },
    module: {
        rules: [
            {
                test: /\.wasm$/,
                type: "javascript/auto",
                loader: "file-loader",
                options: {
                    name: '[name].[ext]'
                }

            }
        ]
    },
    resolve: {
        alias: {
            cQuantWASM: path.join(__dirname, "./node_modules/cquant-web/dist/cquant.wasm")
        }
    }
}
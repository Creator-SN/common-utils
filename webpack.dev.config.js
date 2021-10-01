const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [  // 添加解析规则
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]

    },
    resolve: {   // 需要打包的文件后缀
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        liveReload: true,
        open: true,
        port: 9000
    }
}
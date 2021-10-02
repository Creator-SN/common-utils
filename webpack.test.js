const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: './tests/index.sepc.ts',
    output: {
        path: path.resolve(__dirname, "lib/js"),
        filename: 'tests/test.bundle.js'
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
        port: 9001,
        open:"/tests"
    }
}
const path = require('path')
module.exports = {
    entry: './src/index.ts',
    mode: "production",
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: 'index.js',
        clean: true
    },
    module: {
        rules: [  // 添加解析规则
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    devtool: false,
    resolve: {   // 需要打包的文件后缀
        extensions: [".tsx", ".ts", ".js"]
    },
}
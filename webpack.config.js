module.exports = {
    //入口
    entry: __dirname + "/app/main.js",
    //出口
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    //
    devtool: "eval-source-map",
    //热更新
    devServer:{
        contentBase: './public',
        historyApiFallback: true,//
        inline: true,//实时刷新
    }
}
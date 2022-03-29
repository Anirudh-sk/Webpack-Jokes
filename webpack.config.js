const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports= {
    mode: "development",
    entry : path.resolve(__dirname, 'src/index.js'),
    output:{
        path : path.resolve(__dirname, 'dist'),
        filename: 'main [contenthash].js',
        clean: true,
        assetModuleFilename: '[name] [ext]'
    },
    devtool: 'source-map',
    devServer : {
        static: {
            directory : path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
        compress: true
    },
    module: {

        rules:[
            {
                test : /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i,
                type: 'asset/resource'
            }
        ],
    
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'Webpack learn',
            filename : 'index.html',
            template: 'src/template.html',
            
        })
    ]

}
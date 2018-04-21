const path = require('path')
const webpack =require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 每次打包前，清空打包目录


module.exports = {

	//入口文件
	entry: {
		app: './app.js'
	},

	//输出
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
    
    devtool: 'inline-source-map',
    //配置webapck-dev-server
    devServer: {
    	port: 8081,
    	contentBase: './dist',
    	open: true,  
    	hot: true,   //启动热更新插件
    	inline: true //实时刷新
    },

    //加载器
    module: {
    	rules: [
    	 { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    	]
    },


    //插件
    plugins: [

    	//html模板插件
    	new HtmlWebpackPlugin({
    		template: __dirname + '/index.html',
    		filename: 'index.html'
    	}),

    	//清空打包目录 dist目录
        new CleanWebpackPlugin(['dist']),

        //热更新插件  
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

}
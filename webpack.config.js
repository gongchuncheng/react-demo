var webpack = require('webpack'); 
var path = require('path');                //引入node的path库

//环境变量：开发环境 || 生产环境
var env = process.env.NODE_ENV || 'development';

var config = {
  //配置项目入口
  entry: [
    __dirname +'/app.js'
  ],
  //配置项目输出文件与目录
  output: {
    publicPath: '/',
    path: __dirname,  // 指定编译后的代码位置为 dist/bundle.js
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loader: 'babel', 
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'] 
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, 'src')
      }

    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__DEV__': env === 'development' ? 'true' : 'false',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}

if (env === 'development') {
    config.entry.unshift('webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:4000');
    config.plugins = config.plugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ]);
}

module.exports = config;
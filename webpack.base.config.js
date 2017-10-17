/**
 * @date 2017-03-16 09:47:59
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

const base = (args) => {
  const config = Object.assign(pkg.config, args);
  const {
    port, publicPath, output, src, entry, filename, externals
  } = config;

  return {
    entry,

    output: {
      path: path.join(__dirname, output),
      publicPath,
      filename: `${filename}.js`,
      libraryTarget: 'umd',
      library: 'ReactDevBase',
    },

    plugins: [
      new ExtractTextPlugin({
        filename: `${filename}.css`,
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `${src}/index.html`,
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          include: path.join(__dirname, src),
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: process.env.NODE_ENV === 'production',
                  sourceMap: process.env.NODE_ENV === 'production',
                  importLoaders: 1,
                },
              },
            ],
          }),
        },
        {
          test: /\.module\.css$/,
          include: path.join(__dirname, src),
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: process.env.NODE_ENV === 'production',
                  sourceMap: process.env.NODE_ENV === 'production',
                  camelCase: true,
                  modules: true,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]'
                },
              },
            ],
          }),
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: `file-loader?name=[name]-[hash].[ext]&publicPath=${publicPath}&outputPath=images/`,
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: `file-loader?name=[name]-[hash].[ext]&publicPath=${publicPath}&outputPath=fonts/`,
        },
        // 폰트를 제대로 불러오지 못함.
        // {
        //   test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/i,
        //   use: {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 10000, // 10kb
        //     },
        //   },
        // },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, src),
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          },
          // loader: 'babel-loader',
          // query: {
          //   presets: ['react', 'es2015', 'stage-3'],
          //   plugins: [
          //     'lodash',
          //     'dynamic-import-webpack',
          //     'transform-object-assign',
          //   ],
          // },
        },
      ],
    },

    // 자주 사용되는 경로를 정의한다.
    resolve: {
      alias: {
        _resources: path.resolve(__dirname, `${src}/resources`),
        // _commons: path.resolve(__dirname, `${src}/commons`),
        // _entrypoint: path.resolve(__dirname, `${src}/entrypoint`),
        _components: path.resolve(__dirname, `${src}/components`),
        // _layouts: path.resolve(__dirname, `${src}/layouts`),
        // _apps: path.resolve(__dirname, `${src}/apps`),
        // _containers: path.resolve(__dirname, `${src}/containers`),
        // _utils: path.resolve(__dirname, `${src}/utils`),
        // _actions: path.resolve(__dirname, `${src}/actions`),
        // _reducers: path.resolve(__dirname, `${src}/reducers`),
      },
    },

    devServer: {
      port,
      contentBase: output,
      // 아래의 두 옵션으로 외부에서도 접속할 수 있게 한다.
      disableHostCheck: true,
      host: '0.0.0.0',
      // historyApiFallback: true, // router 용 history
      // backend server 와 연동할때 사용한다.
      // proxy: {
      //   [apiPath]: {
      //     target: proxyHost,
      //     pathRewrite: { [`^${apiPath}`]: '' }, // proxy path 를 제거하도록 다시 쓴다.
      //     secure: false,
      //     prependPath: true, // target 에 경로를 사용한다.
      //   },
      // },
    },
  };
};

module.exports = base;

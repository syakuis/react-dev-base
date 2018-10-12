const path = require('path'); // node.js 내장 패키지
const webpack = require('webpack'); // node.js 내장 패키지
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = (env, args) => {
  // const { appId, __dirbase } = args;
  const { appId } = args;
  const dirbase = __dirname;

  return {
    entry: {},
    output: {
      filename: '[name].js?hash=[hash]',
      path: path.join(dirbase, 'dist'),
    },

    plugins: [
      new webpack.DefinePlugin({
        APP_ID: JSON.stringify(appId),
      }),
      new FileManagerPlugin({
        onStart: {
          delete: [
            path.join(dirbase, 'dist'),
            // path.join(__dirname, 'resources/dist'),
          ],
        },
        // onEnd: {
        //   copy: [
        //     {
        //       source: path.join(__dirname, 'dist'),
        //       destination: path.join(__dirname, 'resources/dist'),
        //     },
        //   ],
        // },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          include: path.join(dirbase, 'src'),
        },
        {
          test: /\.js$/,
          include: path.join(dirbase, 'src'),
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../',
              },
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: ['file-loader'],
        },

        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
                publicPath: '../',
              },
            },
          ],
        },
      ],
    },

    resolve: {
      alias: {
        _src: path.join(dirbase, 'src'),
        _components: path.join(dirbase, 'src/components'),
      },
    },
  };
};

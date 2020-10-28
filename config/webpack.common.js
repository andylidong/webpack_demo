const path = require('path')
const webpack = require('webpack');
const { resolveApp, getHtmlPlugins, getSpa, getAPI } = require('./common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commonConfig = {
  entry: {
    web: './src/pages/web/index.js',
    app: './src/pages/app/index.js',
  },
  output: {
    filename: 'static/js/[name].[hash:8].js',
    // publicPath: "https://cdn.example.com/assets/",
    path: path.join(__dirname, '../dist')
  },
  plugins: [
    ...getHtmlPlugins(getSpa()),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash:8].css',
      path: path.join(__dirname, '../dist'),
      // publicPath: "https://cdn.example.com/assets/",
      // chunkFilename: 'static/css/[id].[hash:8].css',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      // 这里设置的就是你相应的规则了
      // 等价于在你使用lodash模块中语句👇
      // import _ from 'lodash'
      _: 'lodash'
    }),
    new webpack.NamedModulesPlugin(),  // 可配置也可不配置
    new webpack.HotModuleReplacementPlugin() // 这个是必须配置的插件
  ],
  resolve: {
    // 解决编译问题
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // 添加别名，在jsconfig.json中添加vs配置
    alias: {
      "@src": path.resolve(__dirname, '../src'),
      "@utils": path.resolve(__dirname, '../src/utils'),
      "@components": path.resolve(__dirname, '../src/components'),
    },
  },
  optimization: {
    chunkIds: "named", // 指定打包过程中的chunkId，设为named会生成可读性好的chunkId，便于debug
    splitChunks: {
      minSize: 0, // 默认30000（30kb），但是demo中的文件都很小，minSize设为0，让每个文件都满足大小条件
      // name:false,
      cacheGroups: {
        commons: {
          chunks: "all", //加入按需加载后，设为all将所有模块包括在优化范围内
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5, // 默认为3，无法满足我们的分包数量
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
        },
      },
    },
    runtimeChunk: { // 解决的问题是老版本中内容不发生改变的话,contenthash依旧会发生改变
      name: 'manifest'
    },
    minimizer: [
      //  npm i uglifyjs-webpack-plugin@1 解决const keyword问题
      new UglifyJsPlugin({
        sourceMap: true,
        parallel: true,  // 启用多线程并行运行提高编译速度
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: resolveApp('src'),
        loader: require.resolve('babel-loader'),
        options: {
          customize: require.resolve(
            'babel-preset-react-app/webpack-overrides'
          ),
          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent:
                      '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                  },
                },
              },
            ],
            ['import',
              { libraryName: 'antd', style: true }]
          ],
          cacheDirectory: true,
          cacheCompression: false,
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          publicPath: getAPI().ASSETS_ADDRESS,
          name: 'static/images/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      },
      {
        test: [/\.eot$/, /\.svg$/, /\.ttf$/, /\.woff$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 1000000,
          name: 'static/fonts/[name].[hash:8].[ext]',
        },
      }
    ]
  },
}

module.exports = commonConfig;
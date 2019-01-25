const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log('NODE_ENV', NODE_ENV);

const className = NODE_ENV === 'production' ? '[local]--[hash:base64:5]' : '[path][name]__[local]--[hash:base64:5]';

const MinCss = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '../',
  },
};

module.exports = {
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, 'client', 'app.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.local.css$/,
        use: [
          MinCss,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: className,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.local.css$/,
        use: [
          MinCss,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          beautify: false,
          ecma: 5,
          compress: {
            drop_console: true,
          },
          comments: false,
          mangle: false,
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyWebpackPlugin([
      // {from: 'client/icons', to: 'icons'},
      // {from: 'client/manifest.json'},
      // {from: 'client/sw.js'},
      // {from: 'client/index.html'},
      { from: 'static/reset.css', to: 'css' }
    ]),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'client'), 'node_modules'],
  },
  mode: NODE_ENV,
  watch: NODE_ENV === 'development',
};

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const contentBase = `${__dirname}/dist`;
const MODE = 'development';

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === 'development';

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    bundle: './src/index.tsx',
  },

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: contentBase,
    // 出力ファイル名
    filename: 'js/[name].js',
  },

  module: {
    rules: [
      {
        // TypeScriptコンパイル
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        // html出力
        test: /\.html$/,
        loader: 'html-loader',
      },
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        // ローダー名
        use: [
          // linkタグに出力する機能
          'style-loader',
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドを取り込む
              url: true,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          // PostCSSのための設定
          {
            loader: 'postcss-loader',
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
              plugins: [
                // Autoprefixerを有効化
                // ベンダープレフィックスを自動付与する
                require('autoprefixer'),
              ],
            },
          },
          // Sassをバンドルするための機能
          {
            loader: 'sass-loader',
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },

  // プラグイン
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  // 開発用サーバ設定
  devServer: {
    contentBase, // コンテンツベース(公開するリソースのルートとなるディレクトリ)の指定
    watchContentBase: true, // contentBaseに置かれたファイルの変更を監視
    open: true, // ブラウザを自動的に起動
    historyApiFallback: true,
  },

  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};

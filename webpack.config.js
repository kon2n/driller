const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const contentBase = `${__dirname}/dist`;

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

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

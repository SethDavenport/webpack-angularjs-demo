const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SplitByPathPlugin = require('webpack-split-by-path');

const optimizers = process.env.NODE_ENV === 'production' ? [
  // Minify JS output.
  new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

  // Create a report about the generated JS bundles.
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerMode: 'static',
    reportFilename: 'report.html',
  }),
] : [];

module.exports = {
  // This is where we start to crawl the tree looking for imports to
  // tell us what the output bundle should include.
  entry: {
    app: './src/index.ts',
  },

  // This is where we're putting the output.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new SplitByPathPlugin([{
      name: 'vendor',
      path: path.resolve(__dirname, 'node_modules'),
    }]),

    // Don't output broken code; die instead.
    new webpack.NoEmitOnErrorsPlugin(),

    // Use the index.html as the app template; JS and CSS
    // will be injected into it by webpack.
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ].concat(optimizers),

  // Output sourcemaps too, so people can debug the app.
  devtool: 'sourcemap',

  // Transformations on various types of source files. When you import
  // something, it goes through these loaders prior to landing in the
  // bundle.
  module: {
    loaders: [
      // Lint source code.
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      // Transpile ES6+ ES5.
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // Auto-pull in SVGs from @wealthsimple/fabric.
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      // Lets you pull templates into the JS bundle by
      // simply importing them into your JS files.
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      // Allow CSS to be imported from JS files - it will be
      // placed into a 'style' tag in index.html.
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // Transpile SCSS to CSS.
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // Transpile TypeScript to ES5.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      // Lets you define your templates in HAML :scream:
      {
        test: /\.haml$/,
        loaders: 'haml-loader',
      },
      // Lets you write code in coffeescript :scream: :scream:
      {
        test: /\.coffee$/,
        use: 'coffee-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js', '.json', '.coffee'],
  },
};

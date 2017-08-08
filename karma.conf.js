module.exports = function karmaConfig(config) {
  config.set({
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-sourcemap-writer',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-phantomjs-launcher',
    ],

    files: ['./src/karma.entry.js'],
    preprocessors: {
      // Run tests and tested code through webpack to handle template
      // and css imports. Also enable sourcemaps in Karma for more
      // useful error stack traces.
      './src/karma.entry.js': ['webpack', 'sourcemap'],
      './src/**/!(*.test).js': ['sourcemap'],
    },

    webpack: {
      entry: './src/karma.entry.js',
      // Used to provide real line numbers for error stack traces.
      devtool: 'inline-source-map',
      module: {
        rules: [
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
          // Loading styles in unit tests doesn't make sense - turn it off
          { test: /\.css$/, use: 'null-loader' },
          { test: /\.(scss|sass)$/, use: 'null-loader' },
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
    },

    // prevent console spamming when running in Karma.
    webpackServer: { noInfo: true },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
  });
};

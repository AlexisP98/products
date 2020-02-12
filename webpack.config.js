const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  entry: ['./src/js/index.js', './src/style/style.scss'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/global.js'
  },

  devServer: {
    contentBase: './dist',
  },

  module: {
    rules: [
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/global.css'
    }),
    new OptimizeCSSAssetsPlugin({}),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "src", "pages", "*.hbs"),
      output: path.join(process.cwd(), "dist", "[name].html"),
      partials: [
          path.join(process.cwd(), "src", "components", "*", "*.hbs")
      ],
      onBeforeSetup: function (Handlebars) { },
      onBeforeAddPartials: function (Handlebars, partialsMap) { },
      onBeforeCompile: function (Handlebars, templateContent) { },
      onBeforeRender: function (Handlebars, data) { },
      onBeforeSave: function (Handlebars, resultHtml, filename) { },
      onDone: function (Handlebars, filename) { }
  })
  ],

  watch: true,

  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: ['node_modules'],
  },

  mode: 'development'
};


const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === "test") {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === "development") {
  require('dotenv').config({ path: '.env.development' });
}

const plugins = [
  new MiniCssExtractPlugin({
    linkType: true,
  }),
  new webpack.DefinePlugin({
    'process.env.FIREBASE_API_KEY' : JSON.stringify(process.env.FIREBASE_API_KEY),
    'process.env.FIREBASE_AUTH_DOMAIN' : JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
    'process.env.FIREBASE_PROJECT_ID' : JSON.stringify(process.env.FIREBASE_PROJECT_ID),
    'process.env.FIREBASE_STORAGE_BUCKET' : JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
    'process.env.FIREBASE_MESSAGING_SENDER_ID' : JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
    'process.env.FIREBASE_APP_ID' : JSON.stringify(process.env.FIREBASE_APP_ID),
    'process.env.FIREBASE_MEASUREMENT_ID' : JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
  })
];

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: './src/app.js',
    watch: true,
    output: {
      path: path.join(__dirname, 'public', "dist"),
      filename: 'bundle.js'
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        },
        {
          test: /\.s?css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      open: true,
      hot: true,
      historyApiFallback: true

    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  };
}
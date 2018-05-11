const path = require('path');
const webpack = require('webpack');

require('dotenv').load();

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(css|scss)/,
      use: [
        {
          loader: 'emit-file-loader',
          options: { name: 'dist/[path][name].[ext]' }
        },
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            extends: path.resolve(__dirname, './.babelrc')
          }
        },
        { loader: 'styled-jsx-css-loader' }
      ]
    });

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
      'process.env.API_TOKEN': JSON.stringify(process.env.API_TOKEN),
      'process.env.GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.GOOGLE_MAPS_API_KEY),
      'process.env.ANALYTICS_URL': JSON.stringify(process.env.ANALYTICS_URL),
      'process.env.TRANSIFEX_API_KEY': JSON.stringify(process.env.TRANSIFEX_API_KEY),
      'process.env.TRANSIFEX_STAGING': JSON.stringify(process.env.TRANSIFEX_STAGING),
      'process.env.STAGING': JSON.stringify(process.env.STAGING)
    }));

    return config;
  }
};

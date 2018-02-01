const webpack = require('webpack');
require('dotenv').load();

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]'
          }
        },
        'babel-loader',
        'styled-jsx-css-loader'
      ]
    });

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.PORT': JSON.stringify(process.env.PORT)
    }));

    return config;
  }
};

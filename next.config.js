const glob = require('glob');
const path = require('path');
const webpack = require('webpack');

require('dotenv').load();

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.s(a|c)ss$/,
        include: [
          path.resolve(__dirname, 'components')
        ],
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]'
            }
          },
          'babel-loader',
          {
            loader: 'styled-jsx-css-loader',
            options: {
              sourceMap: false,
              sourceMapContents: false
            }
          }
        ]
      },
      {
        test: /\.(css|scss)/,
        include: [
          path.resolve(__dirname, 'css')
        ],
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.s(a|c)ss$/,
        include: [
          path.resolve(__dirname, 'css')
        ],
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sourceMapContents: false,
              includePaths: ['css', 'node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.PORT': JSON.stringify(process.env.PORT)
    }));

    return config;
  }
};

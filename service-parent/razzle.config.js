const nodeExternals = require('webpack-node-externals');
const fs = require('fs');

module.exports = {
  modifyBabelOptions() {
    return {
      presets: ['razzle/babel']
    };
  },
  modify: (config, { target, dev }, webpack) => {
    config.externals =
      target === 'node'
        ? [
          nodeExternals({
            whitelist: [
              dev ? 'webpack/hot/poll?300' : null,
              /\.(woff2|svg|png|jpg|jpeg|gif|ico|webp)$/
            ].filter(Boolean),
          }),
        ]
        : [];

    if (target === 'web') {
      config.output.filename = dev
        ? 'static/js/[name].js'
        : 'static/js/[name].[hash:8].js';

      config.externals.push({
        react: {
          root: 'React',
          commonjs: 'react',
          commonjs2: 'react'
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom'
        },
        'styled-components': {
          root: "styled",
          commonjs: "styled-components",
          commonjs2: "styled-components"
        },
        'react-router-dom': {
          root: 'ReactRouterDOM',
          commonjs: 'react-router-dom',
          commonjs2: 'react-router-dom'
        }
      });
      config.output.libraryTarget = 'umd';
    }
    return config;
  }
};

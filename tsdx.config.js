const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ modules: true }),
      replace({
        preventAssignment: true,
      }),
      images({ include: ['**/*.png', '**/*.jpg', '**/*.svg'] }),
      ...config.plugins,
    ];
    return config;
  },
};

const withNx = require('@nrwl/next/plugins/with-nx');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  withCSS,
  [
    withSass,
    {
      cssModules: true,
    },
  ],
  [
    withNx,
    {
      nx: {
        // Set this to false if you do not want to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: true,
      },
    },
  ],
]);

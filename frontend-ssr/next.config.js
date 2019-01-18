const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  cssModules: true,
  distDir: 'build',
  publicRuntimeConfig: {
    env: process.env
  }
});
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const { i18n } = require('./next-i18next.config');

const withVanillaExtract = createVanillaExtractPlugin({ identifiers: 'debug' });

/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: false,
  },
  i18n,
};

module.exports = withVanillaExtract(config);

const { getModuleBuildInfo } = require('next/dist/build/webpack/loaders/get-module-build-info');

/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  output:'export',
}

module.exports = nextConfig

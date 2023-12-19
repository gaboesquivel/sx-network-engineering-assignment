/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.tls = false
      config.resolve.fallback.net = false
    }
    return config
  },
  images: {
    remotePatterns: []
  },
  experimental: {
    ...(process.env.NODE_ENV === 'development'
      ? { outputFileTracingRoot: path.join(__dirname, '../../') }
      : null)
  }
}

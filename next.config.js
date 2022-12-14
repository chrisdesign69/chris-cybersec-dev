/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/app',
})

// edit this config 
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true}
}

module.exports = withPWA(nextConfig)

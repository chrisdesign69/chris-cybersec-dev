/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
},
)

// edit this config 
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true}
}

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true}
})

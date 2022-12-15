/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
},
)

// Security Headers
const securityHeaders = [
  //Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
},
//X-XSS-Protection
{
  key: 'X-XSS-Protection',
  value: '1; mode=block'
},
//advanced-Protection-by
{
  key: 'Advanced-Protection-by',
  value: 'Chris'
},
//X-Content-Type-Options
{
  key: 'X-Content-Type-Options',
  value: 'nosniff'
},
]

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true},
  // Disable Powered By
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ]
  }
})

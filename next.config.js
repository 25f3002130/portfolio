/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/.well-known/:path*',
          destination: '/api/.well-known/:path*'
        }
      ]
    }
  }
}

module.exports = nextConfig

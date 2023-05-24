/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@ws/ui'],
  experimental: {
    appDir: true,
    serverActions: true
    // runtime: 'experimental-edge',
  },
  webpack: (config, option) => {
    config.module.rules.push({
      test: /\.graphql?$/,
      loader: 'webpack-graphql-loader'
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'do-strapi-portfolio-admin.s3.us-west-1.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'cms.kenn.page'
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }
    ]
  },
  redirects: async function () {
    return [
      {
        source: '/freelancer',
        destination: 'https://www.freelancer.com/u/KennethBarakat',
        permanent: true
      },
      {
        source: '/github',
        destination: 'https://github.com/karambarakat',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
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
        hostname: 'stapi-portfolio-bucket-only-owner.s3.us-west-1.amazonaws.com'
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

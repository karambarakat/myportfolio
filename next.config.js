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

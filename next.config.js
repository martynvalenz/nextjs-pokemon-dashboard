/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    // domains: ['images.unsplash.com', 'localhost'],
    remotePatterns:[
      {
        protocol:'https',
        hostname:'images.unsplash.com'
      },
      {
        protocol:'https',
        hostname:'raw.githubusercontent.com'
      },
    ]
  },
  // env: {
  //   API_URL: process.env.API_URL,
  // },
}

module.exports = nextConfig

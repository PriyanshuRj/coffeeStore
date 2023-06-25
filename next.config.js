/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["source.unsplash.com", "images.unsplash.com"],
      },
      experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig

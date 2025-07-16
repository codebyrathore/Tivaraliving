/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: '/journal',
        destination: '/journal',
      },
      {
        source: '/community',
        destination: '/community',
      },
      {
        source: '/about',
        destination: '/about',
      },
      {
        source: '/testimonials',
        destination: '/testimonials',
      },
      {
        source: '/contact',
        destination: '/contact',
      },
      {
        source: '/collections',
        destination: '/collections',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
        ],
      },
    ]
  },
}

export default nextConfig

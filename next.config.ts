// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig

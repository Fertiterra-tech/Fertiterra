/** @type {import('next').NextConfig} */
const nextConfig = {
  // ft-redirects-v1: routes that already have a real page, so they stop 404ing
  async redirects() {
    return [
      { source: "/quiz", destination: "/screening", permanent: true },
      { source: "/learn/experiencing-symptoms", destination: "/symptoms", permanent: true },
      { source: "/learn/guides", destination: "/knowledge-centre", permanent: true },
      { source: "/learn/real-stories", destination: "/community", permanent: true },
      { source: "/shop/gift-cards", destination: "/shop", permanent: true },
      { source: "/about/research", destination: "/knowledge-centre", permanent: true },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
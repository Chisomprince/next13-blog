/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

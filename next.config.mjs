/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.dummycachetest.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

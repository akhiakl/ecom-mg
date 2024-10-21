/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.dummycachetest.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.aemshop.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} 
const nextConfig = {};

export default nextConfig;
**/


/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    theme: "DEFAULT",
    currency: "IND",
  },
  publicRuntimeConfig: {
    theme: "DEFAULT",
    currency: "IND",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, 
  },
};

module.exports = nextConfig;
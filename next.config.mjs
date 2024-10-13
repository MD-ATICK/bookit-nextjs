/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com", protocol: "https" },
      { hostname: "cloud.appwrite.io", protocol: "https" },
    ],
  },
};

export default nextConfig;

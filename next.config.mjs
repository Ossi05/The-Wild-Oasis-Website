/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    qualities: [75, 80, 100],
    remotePatterns: [
      new URL(process.env.CABIN_IMAGES_URL),
      new URL("https://lh3.googleusercontent.com/**"),
    ],
  },
  cacheComponents: true,
};

export default nextConfig;

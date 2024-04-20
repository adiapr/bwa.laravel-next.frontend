/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        hostname: `${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/*`
      }
    ],
  },
  
};

export default nextConfig;

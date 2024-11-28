/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static exports
    images: {
      unoptimized: true, // Disable Image Optimization API
    },
  };
  
  export default nextConfig;
  
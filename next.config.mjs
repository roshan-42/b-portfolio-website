/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.pixabay.com", "fakestoreapi.com","pixabay.com"],
       
      },
      eslint: {
        ignoreDuringBuilds: true,
    },
};


export default nextConfig;

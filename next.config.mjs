/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hackthefutureofeducation.github.io',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;

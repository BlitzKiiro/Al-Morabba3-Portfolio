/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  async redirects() {
    return [
      {
        source: "/ar",
        destination: "/?lng=ar",
        permanent: false,
      },
      {
        source: "/en",
        destination: "/?lng=en",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/posts/datadog-vs-new-relic",
        destination: "/posts/datadog-vs-newrelic",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

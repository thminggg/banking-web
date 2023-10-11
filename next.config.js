/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  basePath: "/banking-web",
  reactStrictMode: true,
};
module.exports = withBundleAnalyzer(withPWA(nextConfig));

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  basePath: "/react-frontend",
  reactStrictMode: true,
  output: "export",
};
module.exports = withBundleAnalyzer(nextConfig);

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  basePath: "/banking-web",
  output: "export",
};
module.exports = withBundleAnalyzer(nextConfig);

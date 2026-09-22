import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions) {
  const repoFullName = process.env.GITHUB_REPOSITORY;
  if (repoFullName) {
    repo = `/${repoFullName.split("/")[1]}`;
  }
}

// Allow overriding via environment variable (e.g. for custom domains)
const basePath = process.env.BASE_PATH !== undefined 
  ? process.env.BASE_PATH 
  : (isGithubActions && !process.env.CUSTOM_DOMAIN ? repo : "");

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath ? basePath : undefined,
  assetPrefix: basePath ? basePath : undefined,
  trailingSlash: true,
};

export default nextConfig;

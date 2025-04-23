import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // exportTrailingSlash: true,
  images: {
    domains: ["res.cloudinary.com"],
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    /*
    👇 Uncomment this and everything will work
    */
    reactCompiler: true,
  }
};

export default nextConfig;

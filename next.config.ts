import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "u9a6wmr3as.ufs.sh" },
      { hostname: "cdn-icons-png.flaticon.com" },
      { hostname: "www.livelaw.in" },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ca-times.brightspotcdn.com", "lh3.googleusercontent.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "i.ytimg.com",
    //     port: "",
    //     pathname: "/post/**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "lh3.googleusercontent.com",
    //     port: "",
    //     pathname: "/post/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;

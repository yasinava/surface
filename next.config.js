/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "fa",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shopping.storage.iran.liara.space",
        port: "",
        pathname: "",
      },
    ],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose", "bcrypt"],
  },
};

module.exports = nextConfig;

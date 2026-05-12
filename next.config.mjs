/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    qualities: [75, 90]
  }
};

export default nextConfig;
const partners = [
  { name: "TikTok", type: "Social Commerce", logo: "/Clients/TikTok.png" },
]
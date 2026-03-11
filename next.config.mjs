/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enable static export
  reactStrictMode: true,
  images: {
    unoptimized: true // allows <Image> to work in static export
  }
};

export default nextConfig;
const partners = [
  { name: "TikTok", type: "Social Commerce", logo: "/Clients/TikTok.png" },
]
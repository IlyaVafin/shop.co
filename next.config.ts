import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'encrypted-tbn0.gstatic.com',
				pathname: '*/**'
			},
			{
				protocol: 'https',
				hostname: 'media.bergdorfgoodman.com',
				pathname: '*/**'
			},
			{
				protocol: 'https',
				hostname: 'storage.vsemayki.ru',
				pathname: '*/**'
			}
		]
	}
};

export default nextConfig;

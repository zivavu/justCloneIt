import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	rewrites: async () => [
		{
			source: '/job-offers',
			destination: '/',
		},
	],
};

export default nextConfig;

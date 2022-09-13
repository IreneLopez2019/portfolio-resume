/** @type {import('next').NextConfig} */
const nextConfig = {
	generateBuildId: () => 'build',
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['images.prismic.io', 'prismic-io.s3.amazonaws.com']
	}
};

module.exports = nextConfig;

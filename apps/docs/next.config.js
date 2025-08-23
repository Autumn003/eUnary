/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    transpilePackages: ['@repo/ui'],
};

export default nextConfig;
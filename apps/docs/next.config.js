/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['@/components'],
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    transpilePackages: ['@repo/ui'],
};

export default nextConfig;

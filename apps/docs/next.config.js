/** @type {import('next').NextConfig} */

import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
    experimental: {
        turbo: {
            webpack: true, // Use Webpack where necessary
        },
    },
};

export default withContentlayer(nextConfig);

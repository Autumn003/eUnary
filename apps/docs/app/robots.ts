import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://ui.eunary.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/', // Block API endpoints
                    '/admin/', // Block any admin areas if exist in future
                    '/_next/', // Block Next.js internals
                    '/404', // Block error pages
                    '/500',
                ],
                crawlDelay: 10, // Respectful crawl rate
            },

            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/'],
                // No crawl delay for Google
            },

            {
                userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot'],
                disallow: '/', // Block resource-heavy bots
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}

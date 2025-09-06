import { MetadataRoute } from 'next';
import data from '../comp.json';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://ui.eunary.com';

    const components = data.items;

    const docs = ['install-nextjs', 'tailwind-v4', 'add-utilities', 'cli'];

    const staticPage: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/components`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/templates`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    const docPage: MetadataRoute.Sitemap = docs.map((doc) => ({
        url: `${baseUrl}/docs/${doc}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    const componentPage: MetadataRoute.Sitemap = components.map(
        (component) => ({
            url: `${baseUrl}/components/${component.name}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        })
    );

    return [...staticPage, ...docPage, ...componentPage];
}

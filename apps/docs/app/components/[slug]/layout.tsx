import { notFound } from 'next/navigation';
import { getDocBySlug } from '@/lib/mdx';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

async function getDocFromParams({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const param = await params;
    const doc = getDocBySlug(`docs/components/${param.slug}`);
    return doc;
}

// Generate metadata for the layout
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const doc = await getDocFromParams({ params });
    const param = await params;

    if (!doc) {
        return {
            title: 'Component Not Found',
            description:
                'The component documentation you are looking for does not exist.',
        };
    }

    const title = doc.title;
    const description =
        doc.description || `Documentation for the ${doc.title} component.`;
    const canonical = `https://ui.eunary.com/components/${param.slug}`;

    return generatePageMetadata({
        title,
        description,
        keywords: [
            doc.title.toLowerCase(),
            `${doc.title.toLowerCase()} component`,
            'react ui components',
            'react components',
        ],
        images: [`https://ui.eunary.com/media/${param.slug}.png`],
        canonical,
        type: 'article',
    });
}

export default async function ComponentLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}) {
    const doc = await getDocFromParams({ params });

    if (!doc) {
        notFound();
    }

    return <>{children}</>;
}

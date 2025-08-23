import { notFound } from 'next/navigation';
import { getDocBySlug, getAllDocs } from '@/lib/mdx';
import { Mdx } from '@/components/mdx-component';

async function getDocFromParams({ params }: { params: Promise<{ slug: string }> }) {
    const param = await params;
    const doc = getDocBySlug(`docs/installation/${param.slug}`);
    return doc;
}

// Generate static params for better performance
export async function generateStaticParams() {
    const docs = getAllDocs();
    
    return docs
        .filter(doc => doc.slugAsParams.startsWith('docs/installation/'))
        .map((doc) => ({
            slug: doc.slugAsParams.replace('docs/installation/', ''),
        }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const doc = await getDocFromParams({ params });

    if (!doc) {
        return {
            title: 'Not Found',
            description: 'The page you are looking for does not exist.',
        };
    }

    return {
        title: doc.title,
        description: doc.description,
    };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
    const doc = await getDocFromParams({ params });

    if (!doc) {
        notFound();
    }

    return (
        <main className="container">
            <Mdx
                content={doc.content}
                description={doc.description}
            />
        </main>
    );
}

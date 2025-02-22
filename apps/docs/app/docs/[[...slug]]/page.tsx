import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx-component';
// import '@/styles/mdx.css';

interface DocPageProps {
    params: {
        slug: string[];
    };
}

async function getDocFromParams({ params }: DocPageProps) {
    const slug = params.slug?.join('/') || '';
    const doc = allDocs.find((doc) => doc.slugAsParams === slug);

    if (!doc) {
        return null;
    }

    return doc;
}

export default async function DocPage({ params }: DocPageProps) {
    const doc = await getDocFromParams({ params });

    if (!doc) {
        notFound();
    }

    return (
        <main className="prose container">
            <Mdx code={doc.body.code} description={doc.description} />
        </main>
    );
}

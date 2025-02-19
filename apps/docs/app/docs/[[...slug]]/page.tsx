import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx-component';

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
        <main className="prose mx-auto">
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
            <Mdx code={doc.body.code} />
        </main>
    );
}

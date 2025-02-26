import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx-component';

interface DocPageProps {
    params: {
        slug: string;
    };
}

async function getDocFromParams({ params }: DocPageProps) {
    const param = await params;
    const doc = allDocs.find((doc) => doc.slugAsParams === param.slug);

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
        <main className="container">
            <Mdx code={doc.body.code} description={doc.description} />
        </main>
    );
}

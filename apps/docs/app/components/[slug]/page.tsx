import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx-component';
import { getFileContent } from '@/lib/getFileContent';

async function getDocFromParams({ params }: {params: Promise<{slug: string}>}) {
    const param = await params;
    const doc = allDocs.find(
        (doc) => doc.slugAsParams === `docs/components/${param.slug}`
    );

    if (!doc) {
        return null;
    }
    return doc;
}

export default async function DocPage({ params }: {params: Promise<{slug: string}>}) {
    const doc = await getDocFromParams({ params });
    const param = await params;

    if (!doc) {
        notFound();
    }

    const fileContent = await getFileContent(`components/ui/${param.slug}.tsx`);

    return (
        <main className="container">
            <Mdx
                code={doc.body.code}
                description={doc.description}
                fileContent={fileContent}
            />
        </main>
    );
}

import { notFound } from 'next/navigation';
import { getDocBySlug, getAllDocs } from '@/lib/mdx';
import { Mdx } from '@/components/mdx-component';

async function getDocFromParams({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const param = await params;
    const doc = getDocBySlug(`docs/components/${param.slug}`);
    return doc;
}

// Generate static params for better performance
export async function generateStaticParams() {
    const docs = getAllDocs();

    return docs
        .filter((doc) => doc.slugAsParams.startsWith('docs/components/'))
        .map((doc) => ({
            slug: doc.slugAsParams.replace('docs/components/', ''),
        }));
}

export default async function DocPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const doc = await getDocFromParams({ params });
    const param = await params;

    if (!doc) {
        notFound();
    }

    return (
        <main className="container">
            <Mdx content={doc.content} description={doc.description} />
        </main>
    );
}

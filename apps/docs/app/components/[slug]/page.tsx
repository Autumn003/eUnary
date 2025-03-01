import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx-component';
import { getFileContent } from '@/lib/getFileContent';

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

    const fileContent = await getFileContent(
        `components/ui/${doc.slugAsParams}.tsx`
    );
    const demoFileContent = await getFileContent(
        `demo/${doc.slugAsParams}-demo.tsx`
    );

    return (
        <main className="container">
            <Mdx
                code={doc.body.code}
                description={doc.description}
                fileContent={fileContent}
                demoFileContent={demoFileContent}
            />
        </main>
    );
}

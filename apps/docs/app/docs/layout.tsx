import { Sidebar } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Components-Eunary',
    description: 'Components library for quickly create a SAAS products',
};

export default function docsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-10 lg:container">
            <div className="fixed top-14 col-span-1 hidden h-[calc(100vh-3.5rem)] shrink-0 lg:sticky lg:col-span-2 lg:block lg:self-start">
                <Sidebar />
            </div>
            <div className="col-span-10 mt-10 mb-20 flex justify-center lg:col-span-8">
                {children}
            </div>
        </div>
    );
}

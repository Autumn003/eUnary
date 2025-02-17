import Sidebar from '../../components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'eUnary an UI components library',
    description: 'Components library for quickly create a SAAS products',
};

export default function ComponentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container grid grid-cols-10">
            <div className="col-span-2">
                <Sidebar />
            </div>
            <div className="col-span-8 container">{children}</div>
        </div>
    );
}

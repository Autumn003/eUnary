import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'eUnary an UI components library',
    description: 'Components library for quickly create a SAAS products',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <body
                className={`${inter.className} text-primary-foreground custom-scrollbar`}
            >
                <div className="fixed inset-0 -z-50" />
                <Header />
                <div className="mt-16 xl:mt-0">{children}</div>
                <Footer />
            </body>
        </html>
    );
}

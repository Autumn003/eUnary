import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';

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
            <body className={`${inter.className}`}>
                <div className="fixed inset-0 -z-50 bg-linear-to-t from-white to-stone-200 dark:from-gray-800 dark:to-black" />
                <Header />
                {children}
            </body>
        </html>
    );
}

'use client';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import 'remixicon/fonts/remixicon.css';

export default function CodeShowcase({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);

    const copyBtnHandler = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="custom-scrollbar h-96 w-full overflow-auto rounded-lg bg-[#1E1E1E] p-4 text-white md:p-6">
            <div className="relative flex">
                <SyntaxHighlighter
                    language="tsx"
                    style={vscDarkPlus}
                    customStyle={{
                        borderRadius: '8px',
                        overflow: 'scroll',
                        whiteSpace: 'pre',
                        paddingBottom: '8px',
                        scrollbarWidth: 'none',
                    }}
                >
                    {code}
                </SyntaxHighlighter>
                <button
                    className="sticky top-0 ml-auto cursor-pointer self-start rounded-xl p-2 transition-all duration-200 hover:bg-stone-800"
                    onClick={copyBtnHandler}
                >
                    {copied ? (
                        <>
                            <i className="ri-check-line"></i>
                        </>
                    ) : (
                        <>
                            <i className="ri-file-copy-fill"></i>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}

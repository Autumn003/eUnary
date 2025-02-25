'use client';

import { useEffect, useRef, useState } from 'react';
import CodeShowcase from '../web/code/code-showcase';
import { cn } from '@/lib/utils';
import { CopyBtn } from '@/components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ComponentSource = ({
    componentName,
    className,
    collapsible = false,
}: {
    componentName: string;
    className: string;
    collapsible: boolean;
}) => {
    const [code, setCode] = useState<string | null>(null);
    const [isOpened, setisOpened] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchCode = async () => {
            try {
                const res = await fetch(
                    `/api/getComponentCode?name=${componentName}`
                );
                const data = await res.json();
                if (res.ok) {
                    setCode(data.code);
                } else {
                    console.error(data.error);
                }
            } catch (error) {
                console.error('Error fetching component code:', error);
            }
        };

        fetchCode();
    }, [componentName]);

    const buttonHandler = () => {
        setisOpened((prev) => {
            if (prev && containerRef.current) {
                containerRef.current.scrollTop = 0;
            }
            return !isOpened;
        });
    };

    return (
        <div>
            {code ? (
                <div
                    ref={containerRef}
                    className={cn(
                        'custom-scrollbar relative w-full rounded-lg bg-[#1e1e1e] text-white',
                        !isOpened && 'max-h-52 overflow-hidden',
                        isOpened && 'max-h-96 overflow-auto',
                        className
                    )}
                >
                    <div className="sticky top-0 z-20 flex justify-end bg-transparent p-2">
                        <CopyBtn content={code} className="bg-[#1e1e1e]/80" />
                    </div>
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
                    {collapsible && (
                        <div
                            className={cn(
                                'sticky z-10 flex items-center justify-center bg-gradient-to-b from-zinc-800/30 to-zinc-950/90 p-3',
                                isOpened
                                    ? 'inset-x-0 bottom-0'
                                    : 'absolute inset-0 top-0'
                            )}
                        >
                            {collapsible && (
                                <button
                                    onClick={buttonHandler}
                                    className="cursor-pointer rounded-xl bg-neutral-800 px-3 py-2 text-sm font-semibold transition-colors duration-150 hover:bg-neutral-800/60"
                                >
                                    {isOpened ? 'Collapse' : 'Expand'}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <div className="h-fit space-y-4 overflow-hidden rounded-lg bg-[#1e1e1e] px-4 py-10 md:px-6">
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-muted-foreground/30 h-4 w-full animate-pulse rounded-full"
                        ></div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ComponentSource;

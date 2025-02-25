'use client';

import { useEffect, useState } from 'react';
import CodeShowcase from '../web/code/code-showcase';
import { cn } from '@/lib/utils';
import { CopyBtn } from '@/components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ComponentSource = ({ componentName, className }: { componentName: string, className: string }) => {
    const [code, setCode] = useState<string | null>(null);

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

    return (
        <div
            className=''
        >{
                code ? (
                    <div className="custom-scrollbar relative  w-full overflow-auto rounded-lg bg-[#1E1E1E] p-4 text-white md:p-6">
                        <div className="sticky top-0 flex justify-end bg-transparent">
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
                    </div>
                ) :
                    (<div className="h-fit space-y-4 overflow-hidden rounded-lg bg-[#1e1e1e] px-4 py-10 md:px-6">
                        {[...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-muted-foreground/30 h-4 w-full animate-pulse rounded-full"
                            ></div>
                        ))}
                    </div>)

            }
        </div>

    );


};

export default ComponentSource;

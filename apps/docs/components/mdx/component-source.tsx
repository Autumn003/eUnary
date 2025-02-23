'use client';

import { useEffect, useState } from 'react';
import CodeShowcase from '../web/code/code-showcase';

const ComponentSource = ({ componentName }: { componentName: string }) => {
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

    if (!code)
        return (
            <div className="h-96 space-y-4 overflow-hidden rounded-lg bg-[#1e1e1e] px-4 py-10 md:px-6">
                {[...Array(10)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-muted-foreground/30 h-4 w-full animate-pulse rounded-full"
                    ></div>
                ))}
            </div>
        );

    return <CodeShowcase code={code} />;
};

export default ComponentSource;

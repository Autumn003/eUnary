'use client';

import { useEffect, useState } from 'react';
import CodeShowcase from '../web/code/CodeShowcase';

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
            <div>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
                <p>Loading...</p>
            </div>
        );

    return <CodeShowcase code={code} />;
};

export default ComponentSource;

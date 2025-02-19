// @ts-nocheck

'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {
    h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
    p: (props) => <p className="text-lg" {...props} />,
};

export function Mdx({ code }: { code: string }) {
    const Component = useMDXComponent(code);
    return <Component components={components} />;
}

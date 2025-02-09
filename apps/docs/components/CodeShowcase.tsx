import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeShowcase({
    code,
    title,
}: {
    code: string;
    title: string;
}) {
    return (
        <div className="w-fit rounded-lg bg-[#1E1E1E] p-8 text-white">
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <SyntaxHighlighter
                language="tsx"
                style={vscDarkPlus}
                customStyle={{
                    borderRadius: '8px',
                    width: '40rem',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}

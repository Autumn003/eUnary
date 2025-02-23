import { CopyBtn } from '@/components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import 'remixicon/fonts/remixicon.css';

export default function CodeShowcase({ code }: { code: string }) {
    return (
        <div className="custom-scrollbar relative h-96 w-full overflow-auto rounded-lg bg-[#1E1E1E] p-4 text-white md:p-6">
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
    );
}

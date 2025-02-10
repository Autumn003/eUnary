import fs from 'fs';
import path from 'path';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

async function getFileContent(filePath: string): Promise<string> {
    try {
        const absolutePath = path.join(process.cwd(), filePath);
        return fs.readFileSync(absolutePath, 'utf-8');
    } catch (error) {
        console.error(`Error reading file: ${filePath}`, error);
        return 'Error loading file content.';
    }
}

export default async function FileContent({ filePath }: { filePath: string }) {
    const content = await getFileContent(filePath);

    return (
        <div className="rounded-3xl bg-[#1e1e1e] px-3 py-1">
            <pre>
                <SyntaxHighlighter
                    language="tsx"
                    style={vscDarkPlus}
                    customStyle={{
                        borderRadius: '20px',
                        overflow: 'scroll',
                        whiteSpace: 'pre',
                        scrollbarWidth: 'none',
                        height: '24rem',
                        padding: '15px',
                    }}
                >
                    {content}
                </SyntaxHighlighter>
            </pre>
        </div>
    );
}

'use client';

import { cn } from '@/lib/utils';
import ComponentSource from './component-source';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components';
import { useEffect, useState } from 'react';
import { getFileContent } from '@/lib/getFileContent';
import { AppWindowMac, CodeXml } from 'lucide-react';

interface ComponentPreviewProps {
    component: React.ReactNode;
    className: string;
    fileName: string;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
    component,
    className,
    fileName,
}) => {
    const [fileContent, setFileContent] = useState<string>('');

    useEffect(() => {
        const getFileData = async () => {
            const content = await getFileContent(`demo/${fileName}-demo.tsx`);
            setFileContent(content);
        };
        getFileData();
    }, [fileName]);

    return (
        <div
            className={cn('no-scrollbar my-4 h-full rounded-lg p-4', className)}
        >
            <Tabs defaultValue="preview">
                <TabsList className="my-2 gap-4">
                    <TabsTrigger
                        value="preview"
                        className="data-[state=active]:bg-muted-background data-[state=active]:text-primary-foreground border-muted-background text-secondary-foreground w-32 cursor-pointer gap-2 rounded-lg border py-2.5 transition-colors duration-150"
                    >
                        <AppWindowMac className="h-5" />
                        <span className="text-sm font-semibold">Preview</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="code"
                        className="data-[state=active]:bg-muted-background data-[state=active]:text-primary-foreground border-muted-background text-secondary-foreground w-32 cursor-pointer gap-2 rounded-lg border py-2.5 transition-colors duration-150"
                    >
                        <CodeXml className="h-5" />
                        <span className="text-sm font-semibold">Code</span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="preview">
                    <div className="border-muted-background flex min-h-96 items-center justify-center rounded-lg border p-4">
                        <div className="flex w-full items-center justify-center">
                            {component}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="code">
                    <ComponentSource
                        fileContent={fileContent}
                        className="max-h-96 overflow-auto"
                        collapsible={false}
                    />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ComponentPreview;

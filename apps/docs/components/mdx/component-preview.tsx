import { cn } from '@/lib/utils';
import ComponentSource from './component-source';
import 'remixicon/fonts/remixicon.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components';

interface ComponentShowcaseProps {
    component: React.ReactNode;
    className: string;
    fileContent: string;
}

const ComponentPreview: React.FC<ComponentShowcaseProps> = ({
    component,
    className,
    fileContent,
}) => {
    return (
        <div
            className={cn('no-scrollbar my-4 h-full rounded-lg p-4', className)}
        >
            <Tabs defaultValue="preview">
                <TabsList className="my-2 gap-4">
                    <TabsTrigger
                        value="preview"
                        className="data-[state=active]:bg-muted-background data-[state=active]:text-primary-foreground border-muted-background text-secondary-foreground w-32 cursor-pointer gap-2 rounded-lg border py-2 transition-colors duration-150"
                    >
                        <i className="ri-window-line text-[17px]"></i>{' '}
                        <span className="text-sm font-semibold">Preview</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="code"
                        className="data-[state=active]:bg-muted-background data-[state=active]:text-primary-foreground border-muted-background text-secondary-foreground w-32 cursor-pointer gap-2 rounded-lg border py-2 transition-colors duration-150"
                    >
                        <i className="ri-code-s-slash-line text-[17px]"></i>{' '}
                        <span className="text-sm font-semibold">Code</span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="preview">
                    <div className="border-muted-background flex min-h-96 items-center justify-center rounded-lg border p-4">
                        <div className="">{component}</div>
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

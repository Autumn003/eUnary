import { cn } from '@/lib/utils';
import ComponentSource from './component-source';
import 'remixicon/fonts/remixicon.css';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components';

interface ComponentShowcaseProps {
    component: React.ReactNode;
    name: string;
    className: string;
}

const ComponentPreview: React.FC<ComponentShowcaseProps> = ({
    component,
    name,
    className,
}) => {

    return (
        <div
            className={cn('no-scrollbar my-4 h-full rounded-lg p-4', className)}
        >
            <Tabs defaultValue="preview">
                <TabsList className='my-2 gap-4'>
                    <TabsTrigger value="preview" className='data-[state=active]:bg-muted-background data-[state=active]:text-primary-foreground border-muted-background w-32 cursor-pointer rounded-lg border py-2  transition-colors duration-150 text-secondary-foreground'>
                        <i className="ri-window-line"></i>{' '}
                        <span className="text-sm font-semibold">Preview</span>
                    </TabsTrigger>
                    <TabsTrigger value="code" className='data-[state=active]:bg-muted-background data-[state=active]:text-primary-foreground border-muted-background text-secondary-foreground w-32 cursor-pointer rounded-lg border py-2  transition-colors duration-150'>
                        <i className="ri-terminal-box-line"></i>{' '}
                        <span className="text-sm font-semibold">Code</span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="preview">
                    <div className="border-muted-background flex min-h-96 items-center justify-center rounded-lg border p-4">
                        <div className="rounded-lg border p-4">{component}</div>
                    </div>
                </TabsContent>

                <TabsContent value="code">
                    <ComponentSource componentName={name} />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ComponentPreview;

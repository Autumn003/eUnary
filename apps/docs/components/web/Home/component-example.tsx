import FileContent from '../code/file-content';
import { FeaturedGlobeDemo } from '@/demo';

const ComponentExample = () => {
    return (
        <div className="container my-16">
            <div className="col-span-2 mb-20 text-center">
                <h3 className="mb-5 text-2xl font-semibold sm:text-4xl">
                    Fully Customizable Components
                </h3>
                <p className="text-secondary-foreground mx-auto max-w-2xl">
                    Tailor every component to match your brand’s style with
                    ease—change colors, sizes, and behavior without touching the
                    core functionality.
                </p>
            </div>
            <div className="border-muted-background grid grid-cols-2 gap-4 rounded-4xl">
                <div className="relative col-span-2 mb-6 flex flex-col items-center justify-center overflow-hidden md:col-span-1">
                    <div className="from-primary-background absolute bottom-0 z-20 h-16 w-full bg-gradient-to-t to-transparent" />
                    <h1 className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 text-center text-7xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(82,82,82,0.1)] md:text-8xl lg:text-9xl dark:[-webkit-text-stroke:1px_rgba(82,82,82,0.3)]">
                        Customize Your Component
                    </h1>
                    <div className="flex h-96 w-full items-center justify-center">
                        <FeaturedGlobeDemo />
                    </div>
                </div>

                <div className="relative col-span-2 mb-6 overflow-hidden px-2 py-4 md:col-span-1">
                    <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 p-4 px-4 dark:border-neutral-800 dark:bg-neutral-900">
                        <div className="mb-4 flex items-center gap-2 border-b border-gray-700/50 p-3">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                            <div className="ml-auto text-xs text-gray-400">
                                components/ui/featured-globe.tsx
                            </div>
                        </div>
                        <FileContent
                            filePath="components/ui/featured-globe.tsx"
                            className="rounded-t-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentExample;

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
                    <h1
                        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 text-center text-7xl font-bold text-transparent md:text-8xl lg:text-9xl"
                        style={{
                            WebkitTextStroke: '1px rgba(82, 82, 82, 0.3)',
                        }}
                    >
                        Customize Your Component
                    </h1>
                    <div className="flex h-96 w-full items-center justify-center">
                        <FeaturedGlobeDemo />
                    </div>
                </div>

                <div className="group relative col-span-2 md:col-span-1">
                    {/* Multi-layered glow effect */}
                    <div className="absolute -inset-2 rounded-[42px] bg-gradient-to-br from-purple-400 via-indigo-400 to-blue-400 opacity-20 blur-2xl transition-all duration-700 group-hover:opacity-10 group-hover:blur-3xl"></div>

                    {/* Code container with glassmorphism effect */}
                    <div className="relative col-span-2 rounded-[32px] bg-gradient-to-br from-purple-400 via-indigo-400 to-blue-400 p-[2px] shadow-2xl drop-shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-indigo-400/15 md:col-span-1">
                        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-gray-900/95 backdrop-blur-xl">
                            <div className="relative">
                                {/* Code header bar */}
                                <div className="flex items-center gap-2 border-b border-gray-700/50 bg-gray-800/50 px-4 py-3">
                                    <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                                    <span className="ml-4 font-mono text-xs text-gray-400">
                                        floating-elements-card.tsx
                                    </span>
                                </div>

                                {/* File content with overlay effects */}
                                <div className="relative">
                                    <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-indigo-500/5 to-transparent"></div>
                                    <FileContent
                                        filePath="components/ui/featured-globe.tsx"
                                        className="rounded-t-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentExample;

import FileContent from '../code/file-content';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
} from '@tabler/icons-react';
import { FloatingElementsCard } from '@/components/ui/floating-elements-card';
import { ExpandableCardDemo } from '@/demo';

const icons = [
    {
        icon: <IconBrandLinkedin className="h-10 w-10 text-blue-400" />,
        link: 'https://www.linkedin.com/in/hemant003/',
    },
    {
        icon: (
            <IconBrandX className="h-10 w-10 text-neutral-800 dark:text-neutral-50" />
        ),
        link: 'https://www.x.com/hemantsh03',
    },
    {
        icon: (
            <img
                src="/media/logo-dark.jpg"
                alt="logo"
                className="h-10 w-10 rounded-lg"
            />
        ),
        link: 'https://ui.eunary.com/',
    },
    {
        icon: (
            <IconBrandGithub className="h-10 w-10 text-neutral-600 dark:text-neutral-300" />
        ),
        link: 'https://github.com/Autumn003',
    },
];

const ComponentExample = () => {
    return (
        <div className="container my-24">
            <div className="border-muted-background grid grid-cols-2 gap-10 rounded-4xl p-4">
                <div className="relative col-span-2 flex flex-col items-center justify-center md:col-span-1">
                    <h1
                        className="absolute top-1/2 left-0 -z-10 -translate-y-1/2 text-5xl font-bold text-transparent sm:text-7xl md:text-7xl lg:text-9xl"
                        style={{
                            WebkitTextStroke: '1px rgba(82, 82, 82, 0.3)',
                        }}
                    >
                        Customize Your Component
                    </h1>
                    <div className="flex h-96 w-full items-center justify-center p-10">
                        <ExpandableCardDemo />
                    </div>
                </div>
                <div className="relative col-span-2 md:col-span-1">
                    <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-br from-pink-400 via-violet-400 to-blue-400 opacity-30 blur-xl"></div>
                    <div className="col-span-2 rounded-[28px] bg-gradient-to-br from-pink-400 via-violet-400 to-blue-400 p-1 shadow-2xl drop-shadow-2xl md:col-span-1">
                        <FileContent filePath="components/ui/floating-elements-card.tsx" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentExample;

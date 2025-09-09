import { FloatingElementsCard } from '@/components/ui/floating-elements-card';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
} from '@tabler/icons-react';

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
                alt="Eunary UI, a modern component library built with React, Tailwind CSS, and Motion, providing accessible and animated components"
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

export const FloatingElementsCardDemo = () => {
    return (
        <div className="flex h-[34rem] w-full items-center justify-center bg-white dark:bg-black">
            <FloatingElementsCard icons={icons}>
                <div className="mb-3">
                    <a href="https://x.com/Hemantsh03">
                        <div className="mb-3 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 p-1 text-center text-sm font-semibold text-slate-700 shadow-sm transition-shadow hover:shadow-md dark:from-neutral-700/80 dark:to-neutral-800 dark:text-neutral-300 dark:shadow-neutral-700">
                            @hemantsh03
                        </div>
                    </a>
                    <div className="flex gap-3">
                        <div className="h-27 w-27">
                            <img
                                src="/media/character.png"
                                alt="avatar illustration representing @hemantsh03."
                                className="h-27 w-27 rounded-2xl object-cover shadow-md"
                            />
                        </div>
                        <div className="w-70 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-sky-50 px-4 py-2 shadow-sm dark:border-neutral-700/50 dark:from-neutral-700 dark:to-neutral-800">
                            <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                                Hemant Sharma
                            </h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-neutral-300">
                                Full-stack Developer
                            </p>
                            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                                React • Node.js • TypeScript
                            </p>
                            <div className="mt-2 flex items-center">
                                <span className="text-xs font-medium text-amber-400/90">
                                    ⭐ 4.9/5
                                </span>
                                <span className="ml-2 text-xs text-neutral-400">
                                    69 projects
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-slate-200 p-4 shadow-sm dark:border-neutral-700/50 dark:from-neutral-800 dark:to-slate-800">
                    <div className="w-60">
                        <h4 className="mb-1 font-semibold text-neutral-800 dark:text-neutral-50">
                            Recent Project
                        </h4>
                        <h5 className="font-medium text-neutral-500 dark:text-neutral-300">
                            EunaryUI
                        </h5>
                        <p className="text-sm text-neutral-400 dark:text-neutral-500">
                            Elegant modern UI components powered by motion,
                            fluid and responsive.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                            <span className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-100 to-cyan-100 px-2 py-1 text-xs font-medium text-blue-500">
                                NextJS
                            </span>
                            <span className="rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-100 to-teal-100 px-2 py-1 text-xs font-medium text-emerald-600">
                                Motion
                            </span>
                            <span className="rounded-lg border border-purple-200 bg-gradient-to-r from-pink-50 to-fuchsia-100 px-2 py-1 text-xs font-medium text-purple-500">
                                Tailwind
                            </span>
                        </div>
                    </div>
                    <div className="h-27 w-27">
                        <img
                            src="/media/logo-dark.jpg"
                            alt="Eunary UI, a modern component library built with React, Tailwind CSS, and Motion, providing accessible and animated components"
                            className="h-27 w-27 rounded-2xl shadow-md dark:invert"
                        />
                    </div>
                </div>
                <p className="my-3 text-center text-sm font-semibold text-neutral-500/50">
                    Specialized in creating modern web applications.
                </p>
            </FloatingElementsCard>
        </div>
    );
};

'use client';

import { FloatingElementsCard } from '@/components/ui/floating-elements-card';
import Image from 'next/image';
import Link from 'next/link';

const Temp = () => {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <FloatingElementsCard>
                <div className="mb-3">
                    <Link href="https://x.com/Hemantsh03">
                        <div className="mb-3 rounded-full bg-neutral-200 p-1 text-center text-sm font-semibold text-neutral-800">
                            @hemantsh03
                        </div>
                    </Link>
                    <div className="flex gap-3">
                        <div className="flex h-27 w-27 items-center justify-center rounded-[16px] bg-gradient-to-br from-blue-400 to-purple-500 text-2xl font-bold text-white">
                            HS
                        </div>
                        <div className="w-70 rounded-2xl bg-emerald-100 px-4 py-2">
                            <h3 className="text-lg font-bold text-emerald-800">
                                Hemant Sharma
                            </h3>
                            <p className="text-sm text-emerald-700">
                                Full-stack Developer
                            </p>
                            <p className="mt-1 text-xs text-emerald-600">
                                React • Node.js • TypeScript
                            </p>
                            <div className="mt-2 flex items-center">
                                <span className="text-xs text-emerald-500">
                                    ⭐ 4.9/5
                                </span>
                                <span className="ml-2 text-xs text-emerald-600">
                                    69 projects
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 rounded-2xl bg-blue-100 p-4">
                    <div className="w-60">
                        <h4 className="mb-1 font-semibold text-blue-900">
                            Recent Project
                        </h4>
                        <h5 className="font-medium text-blue-800">EunaryUI</h5>
                        <p className="text-sm text-blue-700">
                            Elegant modern UI components powered by motion,
                            fluid and responsive.
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                            <span className="rounded bg-blue-200 px-2 py-1 text-xs text-blue-800">
                                NextJS
                            </span>
                            <span className="rounded bg-blue-200 px-2 py-1 text-xs text-blue-800">
                                Motion
                            </span>
                            <span className="rounded bg-blue-200 px-2 py-1 text-xs text-blue-800">
                                Tailwind
                            </span>
                        </div>
                    </div>
                    <div className="h-27 w-27">
                        <Image
                            src="/media/logo-dark.jpg"
                            alt="logo"
                            width={80}
                            height={80}
                            className="h-27 w-27 rounded-2xl dark:invert"
                        />
                    </div>
                </div>
                <p className="my-3 text-center text-sm font-semibold text-neutral-500">
                    Specialized in creating modern web applications.
                </p>
            </FloatingElementsCard>
        </div>
    );
};

export default Temp;

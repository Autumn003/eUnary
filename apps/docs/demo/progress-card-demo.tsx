'use client';

import React from 'react';
import { ProgressCard } from '@/components/ui/progress-card';
import {
    IconBrush,
    IconCloud,
    IconCode,
    IconDatabase,
} from '@tabler/icons-react';

const ProgressCardDemo = () => {
    // Sample tasks data
    const developmentTasks = [
        {
            icon: IconCode,
            label: 'Frontend Development',
            completed: 9,
            total: 10,
        },
        {
            icon: IconDatabase,
            label: 'Backend Integration',
            completed: 8,
            total: 10,
        },
        {
            icon: IconCloud,
            label: 'DevOps',
            completed: 7,
            total: 10,
        },
        { icon: IconBrush, label: 'UI/UX Design', completed: 8, total: 10 },
    ];

    return (
        <div className="relative h-full min-h-screen w-full bg-gradient-to-br bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:20px_20px] p-3">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        Progress Card Component
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Interactive progress cards with beautiful animations and
                        multiple display modes
                    </p>
                </div>

                <div className="flex justify-center">
                    <ProgressCard
                        title="Development Sprint"
                        description="Current sprint progress with detailed task breakdown"
                        themeColor="#3b82f6"
                        tasks={developmentTasks}
                        percentage={80}
                        className="max-w-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgressCardDemo;

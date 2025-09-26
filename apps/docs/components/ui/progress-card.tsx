import React from 'react';
import { IconBlocks, IconChecks, IconTemplate } from '@tabler/icons-react';

export const ProgressCard = () => {
    const tasks = [
        {
            icon: IconBlocks,
            label: 'Components',
            completed: 12,
            total: 15,
            progress: 12 / 15,
        },
        {
            icon: IconTemplate,
            label: 'Template',
            completed: 1,
            total: 4,
            progress: 1 / 4,
        },
    ];

    return (
        <div className="w-full rounded-2xl bg-indigo-300/20 p-6 backdrop-blur-lg dark:bg-neutral-600/20">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-indigo-500 dark:text-white">
                    Development Progress
                </h2>
                <IconChecks className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </div>

            {/* Tasks List */}
            <div className="space-y-5">
                {tasks.map((task, index) => {
                    const Icon = task.icon;
                    const progressWidth = task.progress * 100;

                    return (
                        <div key={index} className="space-y-3">
                            {/* Task Info */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Icon className="h-5 w-5 text-gray-400" />
                                    <span className="font-medium text-gray-600 dark:text-white">
                                        {task.label}
                                    </span>
                                </div>
                                <span className="text-sm text-neutral-500 dark:text-neutral-300">
                                    {task.completed} of {task.total} ready
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative">
                                {/* Background dashed line */}
                                <div
                                    className="h-0.5 border-t-2 border-dashed border-gray-600"
                                    style={{ width: '100%' }}
                                ></div>

                                {/* Progress line */}
                                <div
                                    className="absolute top-0 h-0.5 bg-indigo-400 transition-all duration-1000 ease-out"
                                    style={{
                                        width: `${progressWidth}%`,
                                        filter: 'drop-shadow(0 0 4px rgb(97, 95, 255, 0.8))',
                                    }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

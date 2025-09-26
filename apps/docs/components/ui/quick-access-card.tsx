import React from 'react';
import {
    IconBlocks,
    IconBook2,
    IconCheck,
    IconLayersSubtract,
    IconPalette,
    IconPencilBolt,
    IconPlus,
} from '@tabler/icons-react';

export const QuickAccessCard = () => {
    const cards = [
        {
            id: 1,
            title: 'Getting Started',
            background: 'bg-gray-100',
            textColor: 'text-gray-900',
            icon: IconBook2,
            iconBg: 'bg-black',
            iconColor: 'text-white',
        },
        {
            id: 2,
            title: 'Components',
            background: 'dark:bg-gray-800 bg-slate-600',
            textColor: 'text-white',
            icon: IconBlocks,
            iconBg: 'bg-slate-500 dark:bg-gray-500',
            iconColor: 'text-gray-300',
        },
        {
            id: 3,
            title: 'Themes',
            background: 'dark:bg-gray-700 bg-slate-400',
            textColor: 'text-white',
            icon: IconPalette,
            iconBg: 'bg-slate-600 dark:bg-gray-600',
            iconColor: 'text-gray-300',
        },
        {
            id: 4,
            title: 'Examples',
            background: 'dark:bg-gray-600 bg-slate-300',
            textColor: 'text-white',
            icon: IconLayersSubtract,
            iconBg: 'bg-slate-700 dark:bg-gray-700',
            iconColor: 'text-gray-300',
        },
    ];

    return (
        <div className="w-full space-y-4 rounded-2xl bg-indigo-300/20 p-6 backdrop-blur-lg dark:bg-neutral-600/20">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-500">
                            <IconPlus className="h-5 w-5 text-white" />
                        </div>
                    </div>
                    <h2 className="text-lg font-semibold text-indigo-500 dark:text-white">
                        Documentation
                    </h2>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-400/10">
                    <IconCheck className="h-5 w-5 text-indigo-500" />
                </div>
            </div>

            {/* Notification */}
            <div className="text-sm text-neutral-500 dark:text-neutral-300">
                Frequently updated with new components & templates.
            </div>

            {/* Cards */}
            <div className="space-y-3">
                {cards.map((card, index) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.id}
                            className={`${card.background} group flex items-center justify-between rounded-2xl p-4 transition-all duration-200 hover:scale-[1.02]`}
                        >
                            <div className="flex items-center space-x-3">
                                <div
                                    className={`h-10 w-10 ${card.iconBg} flex items-center justify-center rounded-xl`}
                                >
                                    <Icon
                                        className={`h-6 w-6 ${card.iconColor}`}
                                    />
                                </div>
                                <div>
                                    <div className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                                        Eunary
                                    </div>
                                    <div
                                        className={`${card.textColor} text-base font-semibold`}
                                    >
                                        {card.title}
                                    </div>
                                </div>
                            </div>

                            <IconPencilBolt
                                className={`h-4 w-4 ${card.textColor === 'text-gray-900' ? 'text-gray-600' : 'text-gray-400'} opacity-70 transition-opacity group-hover:opacity-100`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

import React from 'react';
import { Zap, Palette, Code, Shield, Smartphone, Moon } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Zap className="h-8 w-8" />,
            title: 'Lightning Fast',
            description:
                'Optimized animations that run at 60fps with minimal performance impact on your applications.',
            color: 'from-yellow-400 to-orange-500',
        },
        {
            icon: <Palette className="h-8 w-8" />,
            title: 'Fully Customizable',
            description:
                'Every component is built with customization in mind. Change colors, timing, and behavior easily.',
            color: 'from-pink-400 to-purple-500',
        },
        {
            icon: <Code className="h-8 w-8" />,
            title: 'Developer Friendly',
            description:
                'Pre build components with intuitive usage, strong TypeScript support, and easy integration.',
            color: 'from-blue-400 to-cyan-500',
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: 'Accessibility First',
            description:
                'Built with accessibility in mind, supporting screen readers and respecting user preferences.',
            color: 'from-green-400 to-teal-500',
        },
        {
            icon: <Smartphone className="h-8 w-8" />,
            title: 'Mobile Optimized',
            description:
                'Touch-friendly interactions and responsive animations that work perfectly on all devices.',
            color: 'from-indigo-400 to-purple-500',
        },
        {
            icon: <Moon className="h-8 w-8" />,
            title: 'Dark Mode Ready',
            description:
                'Built-in dark mode support with seamless theme transitions and proper contrast ratios.',
            color: 'from-gray-600 to-gray-800',
        },
    ];

    return (
        <section id="features" className="mb-20 py-16">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-2xl font-semibold sm:text-4xl">
                        Why developers love Eunary UI
                    </h2>
                    <p className="text-secondary-foreground mx-auto max-w-2xl">
                        Built for modern web development with performance,
                        accessibility, and developer experience at its core.
                    </p>
                </div>

                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute bottom-10 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    <div className="absolute top-10 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    <div className="absolute top-2/3 left-2/3 h-96 w-96 -translate-x-1/3 -translate-y-1/3 transform rounded-full bg-indigo-500/10 blur-3xl"></div>

                    <div className="absolute top-1/3 left-1/6 h-96 w-96 -translate-x-1/3 -translate-y-1/3 transform rounded-full bg-indigo-500/10 blur-3xl"></div>
                </div>
                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-primary-background/10 border-muted-background transform rounded-2xl border p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div
                                className={`inline-flex rounded-xl bg-gradient-to-r p-3 ${feature.color} mb-6 text-white transition-transform duration-300 group-hover:scale-110`}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-primary-foreground mb-4 text-xl font-semibold">
                                {feature.title}
                            </h3>
                            <p className="text-secondary-foreground/80 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Framework Support */}
                <div className="mt-20 text-center">
                    <h3 className="text-secondary-foreground mb-8 text-lg font-bold sm:text-2xl">
                        Powered by industry-leading tools
                    </h3>
                    <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                        <div className="mr-4 flex items-center gap-2">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
                                >
                                    <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                                    <path d="M15 12v-3"></path>
                                </svg>
                            </span>
                            <span className="shrink-0 text-sm font-semibold text-neutral-500">
                                Next.js
                            </span>
                        </div>
                        <div className="mr-4 flex items-center gap-2">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
                                >
                                    <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                                    <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                                    <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                                    <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                                    <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                                    <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                                    <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                                </svg>
                            </span>
                            <span className="shrink-0 text-sm font-semibold text-neutral-500">
                                React
                            </span>
                        </div>
                        <div className="mr-4 flex items-center gap-2">
                            <span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 shrink-0 stroke-[0.5px] text-neutral-500 md:h-10 md:w-10"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                                </svg>
                            </span>
                            <span className="shrink-0 text-sm font-semibold text-neutral-500">
                                TailwindCSS
                            </span>
                        </div>
                        <div className="mr-4 flex items-center gap-2">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
                                >
                                    <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                                    <path d="M20 12l-8 8l-4 -4"></path>
                                </svg>
                            </span>
                            <span className="shrink-0 text-sm font-semibold text-neutral-500">
                                Framer Motion
                            </span>
                        </div>
                        <div className="mr-4 flex items-center gap-2">
                            <span>
                                <svg
                                    height="24"
                                    viewBox="0 0 659 165"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-14 shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-14"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
                                        fill="url(#paint0_linear)"
                                    ></path>
                                    <path
                                        d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
                                        fill="url(#paint1_linear)"
                                    ></path>
                                    <path
                                        d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
                                        fill="url(#paint2_linear)"
                                    ></path>
                                    <path
                                        d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
                                        fill="url(#paint3_linear)"
                                    ></path>
                                    <path
                                        d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
                                        fill="currentColor"
                                    ></path>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear"
                                            x1="591.052"
                                            y1="47.1035"
                                            x2="591.052"
                                            y2="161.28"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="currentColor"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="currentColor"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear"
                                            x1="203.19"
                                            y1="44.0317"
                                            x2="203.19"
                                            y2="164.352"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="currentColor"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="currentColor"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="paint2_linear"
                                            x1="368.744"
                                            y1="44.0317"
                                            x2="368.744"
                                            y2="161.28"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="currentColor"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="currentColor"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="paint3_linear"
                                            x1="499.172"
                                            y1="0"
                                            x2="499.172"
                                            y2="161.28"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="currentColor"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="currentColor"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

const Features = () => {
    const data = [
        {
            logo: <i className="ri-clipboard-line"></i>,
            title: 'Copy-Paste Simplicity',
            description: `Seamless integration in a snap, no hassle just copy—paste, and start building beautiful interfaces instantly.`,
        },
        {
            logo: <i className="ri-device-line"></i>,
            title: 'Fully Responsive',
            description: `Built to adapt seamlessly across all devices—whether it’s a phone, tablet, or desktop, your UI stays pixel-perfect everywhere.`,
        },
        {
            logo: <i className="ri-moon-line"></i>,
            title: 'Light & Dark UI',
            description: `Automatic dark mode recognition, EunaryUI automatically changes the theme when detects HTML theme prop changes.`,
        },
        {
            logo: <i className="ri-speed-line"></i>,
            title: 'Performance Focused',
            description: `Optimized for fast rendering with minimal re-renders, keeping your UI smooth and efficient.`,
        },
        {
            logo: <i className="ri-accessibility-line"></i>,
            title: 'Full Accessibility',
            description: `Your components, your rules! Full control over customization while ensuring top-tier accessibility—effortlessly adapt every detail to fit your unique needs.`,
        },
        {
            logo: <i className="ri-flashlight-line"></i>,
            title: 'Fast',
            description: `Lightning-fast performance with zero runtime styles—built on Tailwind CSS for a clean, efficient, and optimized bundle.`,
        },
        {
            logo: <i className="ri-magic-line"></i>,
            title: 'Elegant Animations',
            description: `Built-in support for framer-motion ensures smooth and delightful animations out of the box.`,
        },
        {
            logo: <i className="ri-heart-3-line"></i>,
            title: 'Community Driven',
            description: `Actively maintained and improved by a passionate community of developers.`,
        },
    ];

    return (
        <div className="my-20">
            <div className="container my-10 text-center">
                <h3 className="mb-5 text-xl font-semibold">
                    Fully-featured React UI library.
                </h3>
                <p className="text-secondary-foreground">
                    EunaryUI is a powerful and flexible UI component library
                    that helps you build fast, scalable, and maintainable web
                    applications.
                </p>
            </div>
            <div className="relative container bg-[url(/media/whirl.svg)] bg-cover bg-left bg-no-repeat py-6">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black" />

                <div className="bg-primary-background/40 dark:bg-primary-background/20 absolute inset-0" />
                <div className="grid h-96 grid-cols-4 justify-center overflow-auto md:h-auto">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="col-span-4 md:col-span-2 lg:col-span-1"
                        >
                            <div className="bg-primary-background/10 m-4 min-h-44 max-w-96 rounded-3xl p-4 backdrop-blur">
                                <div className="my-2 flex items-center gap-2">
                                    <div className="bg-muted-background my-auto flex h-8 w-8 items-center justify-center rounded-full">
                                        {item.logo}
                                    </div>
                                    <h5 className="font-semibold">
                                        {item.title}
                                    </h5>
                                </div>
                                <div>
                                    <p className="w-full px-2 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black" />
            </div>
        </div>
    );
};

export default Features;

'use client';

import { Card, ExploreComponents } from '@/components';
import { Sparkles } from '@/components/ui/sparkles';
import { IconBolt } from '@tabler/icons-react';

const freeCardPoints = [
    'A growing library of awesome components',
    'React / Next.js / Tailwind CSS code',
    'Serves a wide variety of audience',
    'MIT Licence. Personal or commercial projects',
    'Contact over chat for support',
];

const componentsCardpoints = [
    'As many components as possible in a month',
    'React / Next.js / Tailwind CSS code',
    'Design + Development',
    'Unlimited Revisions',
    '24-hour support response time',
    'Private communication channel',
    '4-7 days turnaround time',
    'Pause or cancel anytime',
];

const pagesCardPoints = [
    'One request / page at a time',
    'React / Next.js / Tailwind CSS code',
    'Design + Development',
    'Unlimited Revisions',
    'CMS integration',
    'Search Engine Optimization',
    '24-hour support response time',
    'Private communication channel',
    '7-10 days turnaround time',
    'Pause or cancel anytime',
];

const pageCardButtonHandler = () => {
    alert('page card button clicked');
};

const componenCardtButtonHandler = () => {
    alert('component card button clicked');
};

const page = () => {
    return (
        <div className="container">
            <div className="py-10 text-center md:p-20">
                <h1 className="dark:text-primary-foreground text-secondary-foreground text-3xl font-bold md:text-5xl">
                    Custom components or unique websites
                </h1>
                <h1 className="text-muted-foreground my-6 text-2xl font-bold md:my-10 md:text-4xl">
                    We build beyond your expectations
                </h1>
                <p className="text-sm md:text-lg md:leading-loose">
                    From a single component to a fully functional website,{' '}
                    <br /> we craft solutions that match your vision—no hidden
                    costs.
                </p>
            </div>
            <div className="mb-20 flex flex-col items-center justify-around gap-5 md:flex-row">
                <Card
                    heading="Free"
                    subheading="Existing Components"
                    description="All the components that are freely available on the website are free to use."
                    className="w-full"
                    points={freeCardPoints}
                    link="Browse Components"
                    linkNavigationPath="/components"
                ></Card>
                <Card
                    heading="$4995/mo"
                    subheading="Custom Components"
                    description="Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections."
                    className="group relative w-full overflow-hidden"
                    points={componentsCardpoints}
                    outlineButton="Buy Now"
                    buttonHandler={componenCardtButtonHandler}
                >
                    <div className="absolute inset-0 h-full w-full bg-white/10 backdrop-blur-md">
                        <Sparkles
                            className="h-full w-full"
                            background={'transparent'}
                            particleDensity={200}
                            maxSize={1}
                            minSize={0.2}
                            id={1}
                            particleColor="#dab2ff"
                        />
                        <div className="absolute inset-0 mx-auto flex h-full w-full max-w-xs flex-col items-center justify-center gap-3 text-center">
                            <div className="flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-400 to-violet-400 group-hover:animate-none">
                                <IconBolt className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-2xl font-semibold text-purple-400">
                                Coming soon 👀
                            </h4>
                            <p className="text-gray-400 dark:text-gray-200">
                                Exciting services are on the way.
                            </p>
                        </div>
                    </div>
                </Card>
                <Card
                    heading="$6995/mo"
                    subheading="Pages"
                    description="Best for early-stage startups and businesses that need a marketing site and ongoing developmental work."
                    className="group relative w-full overflow-hidden"
                    points={pagesCardPoints}
                    solidButton="Buy Now"
                    buttonHandler={pageCardButtonHandler}
                >
                    <div className="absolute inset-0 h-full w-full bg-white/10 backdrop-blur-md">
                        <Sparkles
                            className="h-full w-full"
                            background={'transparent'}
                            particleDensity={200}
                            maxSize={1}
                            minSize={0.2}
                            id={2}
                            particleColor="#dab2ff"
                        />
                        <div className="absolute inset-0 mx-auto flex h-full w-full max-w-xs flex-col items-center justify-center gap-3 text-center">
                            <div className="flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-400 to-violet-400 group-hover:animate-none">
                                <IconBolt className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="text-2xl font-semibold text-purple-400">
                                Almost Here ⏳
                            </h4>
                            <p className="text-gray-400 dark:text-gray-200">
                                Get ready for a whole new experience.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
            <div>
                <ExploreComponents
                    nextComponent="Next-component"
                    recentlyAddedComponent="recent-component"
                    className="md:h-96 md:py-16"
                />
            </div>
        </div>
    );
};

export default page;

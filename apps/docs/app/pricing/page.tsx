import { Card, ExploreComponents } from '@/components';
import Link from 'next/link';

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
                >
                    <div className="h-[28rem]">
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>A growing library of awesome components</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>React / Next.js / Tailwind CSS code</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Serves a wide variety of audience.</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>MIT Licence. Personal or commercial projects.</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Contact over chat for support</p>
                        </div>
                    </div>
                    <div className="my-5 w-full cursor-pointer rounded-xl bg-violet-400 from-violet-600 via-violet-400 to-violet-600 py-3 text-center font-semibold text-white transition-colors duration-150 hover:bg-violet-500/80 dark:bg-gradient-to-r dark:hover:from-violet-700/80 dark:hover:via-violet-500/80 dark:hover:to-violet-700/80">
                        <Link href="components" className="w-96">
                            Browse Components
                        </Link>
                    </div>
                </Card>
                <Card
                    heading="$4995/mo"
                    subheading="Custom Components"
                    description="Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections."
                    className="bg-muted-background/50 w-full"
                >
                    <div className="h-[28rem]">
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>As many components as possible in a month</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>React / Next.js / Tailwind CSS code</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Design + Development</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Unlimited Revisions</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>24-hour support response time</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Private communication channel</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>4-7 days turnaround time</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Pause or cancel anytime</p>
                        </div>
                    </div>
                    <button className="my-5 w-full cursor-pointer rounded-xl border-[1.5px] border-violet-400 py-3 font-semibold text-violet-500 hover:border-violet-500 hover:text-violet-600 dark:bg-gradient-to-r dark:text-violet-400 dark:hover:border-violet-400/80 dark:hover:text-violet-400/80">
                        Buy Now
                    </button>
                </Card>
                <Card
                    heading="$6995/mo"
                    subheading="Pages"
                    description="Best for early-stage startups and businesses that need a marketing site and ongoing developmental work."
                    className="w-full"
                >
                    <div className="h-[28rem]">
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>One request / page at a time</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>React / Next.js / Tailwind CSS code</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Design + Development</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Unlimited Revisions</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>CMS integration</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Search Engine Optimization</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>24-hour support response time</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Private communication channel</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>7-10 days turnaround time</p>
                        </div>
                        <div className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>Pause or cancel anytime</p>
                        </div>
                    </div>
                    <button className="my-5 w-full cursor-pointer rounded-xl bg-violet-400 from-violet-600 via-violet-400 to-violet-600 py-3 font-semibold text-white transition-colors duration-150 hover:bg-violet-500/80 dark:bg-gradient-to-r dark:hover:from-violet-700/80 dark:hover:via-violet-500/80 dark:hover:to-violet-700/80">
                        Buy Now
                    </button>
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

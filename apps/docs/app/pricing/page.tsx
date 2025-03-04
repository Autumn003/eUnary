import { Card } from '@/components';

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
            <div className="mb-20 flex justify-around">
                <Card
                    heading="Free"
                    subheading="Existing Components"
                    description="All the components that are freely available on the website are free to use."
                >
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
                </Card>
                <Card
                    heading="$4995/mo"
                    subheading="Custom Components"
                    description="Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections."
                >
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
                </Card>
                <Card
                    heading="$6995/mo"
                    subheading="Pages"
                    description="Best for early-stage startups and businesses that need a marketing site and ongoing developmental work."
                >
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
                </Card>
            </div>
        </div>
    );
};

export default page;

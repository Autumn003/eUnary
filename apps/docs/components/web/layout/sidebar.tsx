import Link from 'next/link';
import { items } from '@/registry.json';

const Sidebar = () => {
    const installationTabs = [
        { title: 'Install Next.js', target: 'docs/install-next.js' },
        { title: 'Install Tailwind.css', target: 'docs/install-tailwind.css' },
        { title: 'Add Utils', target: 'docs/add-utils' },
        { title: 'CLI', target: 'docs/cli' },
    ];

    const sortedItem = [...items].sort((a, b) =>
        a.title.localeCompare(b.title)
    );

    return (
        <div className="h-full">
            <div className="custom-scrollbar flex h-full flex-col overflow-auto py-6 pr-6 text-[15px] lg:py-8">
                <div className="my-2 flex flex-col">
                    <h4 className="my-2 font-semibold">Installation</h4>
                    {installationTabs.map((item, index) => (
                        <Link
                            key={index}
                            href={`components/${item.target}`}
                            className="text-secondary-foreground hover:text-primary-foreground py-1.5 text-wrap transition-all duration-150 hover:translate-x-1.5"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="my-2 flex flex-col">
                    <h4 className="my-2 font-semibold">Components</h4>
                    {sortedItem.map((item, index) => (
                        <Link
                            key={index}
                            href={`/components/${item.name}`}
                            className="text-secondary-foreground hover:text-primary-foreground py-1.5 text-wrap transition-all duration-150 hover:translate-x-1.5"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

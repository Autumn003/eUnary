import { cn } from '@/lib/utils';
import Image from 'next/image';

interface cardProps {
    heading: string;
    subheading?: string;
    imageURL?: string;
    className?: string;
    description?: string;
    children?: any;
}

const Card = ({
    heading,
    subheading,
    imageURL,
    className,
    description,
    children,
}: cardProps) => {
    return (
        <div
            className={cn(
                'group hover:bg-muted-background/50 relative mx-5 w-full rounded-4xl border p-6 transition-colors duration-150',
                className
            )}
        >
            <h3 className="mb-5 text-center text-4xl font-bold">{heading}</h3>
            {imageURL && (
                <Image
                    src={`${imageURL}`}
                    alt="Card image"
                    width={300}
                    height={300}
                    className="mb-2"
                />
            )}

            <h4 className="text-secondary-foreground mb-4 text-lg font-semibold">
                {subheading}
            </h4>
            <p className="h-24 text-[15px]">{description}</p>
            <div className="mb-32 text-[15px]">{children}</div>
            <button className="absolute bottom-0 my-5 w-[86%] rounded-xl bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 py-3 font-semibold">
                Click me
            </button>
        </div>
    );
};

export default Card;

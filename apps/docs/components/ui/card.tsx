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
                'group hover:bg-muted-background/50 relative max-w-96 min-w-80 rounded-4xl border p-6 transition-colors duration-150',
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
            <div className="text-[15px]">{children}</div>
        </div>
    );
};

export default Card;

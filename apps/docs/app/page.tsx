import {
    UIShowcase,
    ComponentExample,
    CopyPaste,
    Features,
    HeroSection,
} from '@/components';

export default function page() {
    return (
        <div className="mt-0 xl:-mt-16">
            <HeroSection />
            <CopyPaste />
            <UIShowcase />
            <ComponentExample />
            <Features />
        </div>
    );
}

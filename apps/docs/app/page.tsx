import {
    UIShowcase,
    ComponentExample,
    CopyPaste,
    Features,
    HeroSection,
} from '@/components';

export default function page() {
    return (
        <div>
            <HeroSection />
            <CopyPaste />
            <UIShowcase />
            <ComponentExample />
            <Features />
        </div>
    );
}

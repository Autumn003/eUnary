import {
    AutoScrollingGallery,
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
            <AutoScrollingGallery />
            <ComponentExample />
            <Features />
        </div>
    );
}

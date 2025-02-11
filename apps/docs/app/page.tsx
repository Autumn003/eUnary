import {
    AutoScrollingGallery,
    ComponentExample,
    CopyPaste,
    HeroSection,
} from '../components';

export default function page() {
    return (
        <div>
            <HeroSection />
            <CopyPaste />
            <AutoScrollingGallery />
            <ComponentExample />
        </div>
    );
}

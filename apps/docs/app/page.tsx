import {
    AutoScrollingGallery,
    ComponentExample,
    CopyPaste,
    FileContent,
    HeroSection,
    Home,
} from '../components';

export default function page() {
    return (
        <div>
            <HeroSection />
            <AutoScrollingGallery />
            <ComponentExample />
            <CopyPaste />
        </div>
    );
}

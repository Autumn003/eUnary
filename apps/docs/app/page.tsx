import { ThemeToggler } from '../components/ThemeToggler';

export default function page() {
    return (
        <div>
            <h1 className="text-foreground">Page</h1>

            <br />
            <div className="bg-primary-background h-12 w-64">
                <h1 className="text-primary-foreground text-3xl">HEADER 1</h1>
            </div>
            <div className="bg-secondary-background h-12 w-64">
                <h1 className="text-secondary-foreground text-2xl">HEADER 2</h1>
            </div>
            <div className="bg-muted-background h-12 w-64">
                <h1 className="text-1xl text-muted-foreground">HEADER 3</h1>
            </div>
        </div>
    );
}

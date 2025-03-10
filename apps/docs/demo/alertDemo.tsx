import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const AlertDemo = () => {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <Alert variant="processing" delay={5000}>
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                    This is Alert description. Click on croxx button to close
                    alert
                </AlertDescription>
            </Alert>
        </div>
    );
};

export default AlertDemo;

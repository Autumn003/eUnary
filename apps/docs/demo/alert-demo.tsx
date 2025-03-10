'use client';

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useEffect, useState } from 'react';

const AlertDemo = () => {
    const [showAlert, setShowAlert] = useState(false);
    const buttonHandler = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert((prev) => !prev);
        }, 5500);
    };

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            {showAlert ? (
                <Alert variant="processing" delay={5000}>
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>
                        This is Alert description. Click on croxx button to
                        close alert
                    </AlertDescription>
                </Alert>
            ) : (
                <button
                    onClick={buttonHandler}
                    className="cursor-pointer rounded-md border border-neutral-400/30 px-4 py-1 font-semibold hover:bg-neutral-400/20"
                >
                    Alert
                </button>
            )}
        </div>
    );
};

export default AlertDemo;

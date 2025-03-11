'use client';

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';

const AlertDefaultDemo = () => {
    const [showAlert, setShowAlert] = useState(false);
    const buttonHandler = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert((prev) => !prev);
        }, 5500);
    };

    return (
        <div className="">
            {showAlert ? (
                <Alert>
                    <AlertTitle>Alert</AlertTitle>
                    <AlertDescription>
                        This is Alert description. Click on cross button to
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

export default AlertDefaultDemo;

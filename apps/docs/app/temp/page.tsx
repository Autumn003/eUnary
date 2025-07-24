'use client';

import { FloatingElementsCard } from '@/components/ui/floating-elements-card';
import React, { useState } from 'react';

const Temp = () => {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
        setFiles(files);
        console.log(files);
    };

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <FloatingElementsCard>
                <div>
                    <div>
                        <div className="h-36 w-36 rounded-[20px] bg-neutral-200"></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </FloatingElementsCard>
        </div>
    );
};

export default Temp;

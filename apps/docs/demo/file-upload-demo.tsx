'use client';

import React, { useState } from 'react';
import { FileUpload } from '@/components/ui/file-upload';

const FileUploadDemo = () => {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
        setFiles(files);
        console.log(files);
    };

    return (
        <div className="mx-auto flex h-full min-h-96 w-full max-w-4xl items-center rounded-lg">
            <FileUpload onChange={handleFileUpload} multiple={true} />
        </div>
    );
};

export default FileUploadDemo;

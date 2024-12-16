import { useState } from 'react';
import toast from 'react-hot-toast';

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB in bytes

export function usePDFUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = async (file: File) => {
    if (file.size > MAX_FILE_SIZE) {
      toast.error('File size must be less than 25MB');
      return;
    }

    if (file.type !== 'application/pdf') {
      toast.error('Only PDF files are allowed');
      return;
    }

    setIsUploading(true);
    try {
      // Here you would typically upload the file to your backend
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSelectedFile(file);
      toast.success('PDF uploaded successfully');
    } catch (error) {
      toast.error('Failed to upload PDF');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return {
    selectedFile,
    isUploading,
    handleFileSelect,
    handleRemoveFile
  };
}
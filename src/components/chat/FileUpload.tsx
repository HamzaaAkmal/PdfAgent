import React, { useRef } from 'react';
import { Upload, FileText, X, Loader2 } from 'lucide-react';
import { usePDFUpload } from '../../hooks/usePDFUpload';

export default function FileUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { selectedFile, isUploading, handleFileSelect, handleRemoveFile } = usePDFUpload();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        accept=".pdf"
        className="hidden"
        id="pdf-upload"
      />
      <label
        htmlFor="pdf-upload"
        className={`flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer ${
          isUploading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isUploading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Upload className="w-5 h-5" />
        )}
        {isUploading ? 'Uploading...' : 'Upload PDF'}
      </label>
      <div className="flex-1 min-w-0">
        {selectedFile ? (
          <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-3 py-2 rounded-lg">
            <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
            <span className="text-sm text-gray-900 dark:text-gray-100 truncate">
              {selectedFile.name}
            </span>
            <button
              onClick={handleRemoveFile}
              className="ml-auto p-1 hover:bg-purple-100 dark:hover:bg-purple-800 rounded-full"
              disabled={isUploading}
            >
              <X className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FileText className="w-4 h-4" />
            <span>No file selected (Max 25MB)</span>
          </div>
        )}
      </div>
    </div>
  );
}
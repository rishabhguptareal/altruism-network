
import React, { useState } from 'react';
import { Upload, X, FilePlus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  onChange: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  maxSize?: number; // in MB
  className?: string;
  label?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onChange,
  multiple = false,
  accept = "image/*",
  maxSize = 5, // Default 5MB
  className,
  label = "Upload files"
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    
    const selectedFiles = Array.from(e.target.files);
    const validFiles = validateFiles(selectedFiles);
    
    if (validFiles.length) {
      const newFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(newFiles);
      onChange(newFiles);
    }
  };

  const validateFiles = (selectedFiles: File[]): File[] => {
    setError(null);
    
    return selectedFiles.filter(file => {
      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        setError(`File ${file.name} is too large. Maximum size is ${maxSize}MB.`);
        return false;
      }
      
      // Check file type if accept is provided
      if (accept !== "*" && !file.type.match(accept.replace("*", ""))) {
        setError(`File ${file.name} is not a valid type.`);
        return false;
      }
      
      return true;
    });
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onChange(newFiles);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files?.length) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      const validFiles = validateFiles(droppedFiles);
      
      if (validFiles.length) {
        const newFiles = multiple ? [...files, ...validFiles] : validFiles;
        setFiles(newFiles);
        onChange(newFiles);
      }
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors", 
          isDragging ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary/50",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input 
          type="file" 
          id="file-upload"
          onChange={handleFileChange}
          multiple={multiple}
          accept={accept}
          className="hidden"
        />
        <label htmlFor="file-upload" className="cursor-pointer w-full h-full block">
          <div className="flex flex-col items-center justify-center py-4">
            {files.length === 0 ? (
              <>
                <FilePlus className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 mb-1">{label}</p>
                <p className="text-xs text-gray-400">
                  Drag and drop or click to upload
                </p>
                {accept !== "*" && (
                  <p className="text-xs text-gray-400 mt-1">
                    Accepted formats: {accept.replace("*", "all")}
                  </p>
                )}
                <p className="text-xs text-gray-400">
                  Max size: {maxSize}MB
                </p>
              </>
            ) : (
              <>
                <Upload className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-gray-600">
                  {multiple 
                    ? `${files.length} file${files.length > 1 ? 's' : ''} selected` 
                    : 'File selected'}
                </p>
                <p className="text-xs text-primary hover:underline mt-1">
                  Click to change
                </p>
              </>
            )}
          </div>
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div 
              key={`${file.name}-${index}`}
              className="flex items-center justify-between p-2 bg-gray-50 rounded border"
            >
              <div className="flex items-center overflow-hidden">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center mr-2">
                  <span className="text-xs text-gray-600">
                    {file.name.split('.').pop()?.toUpperCase() || 'FILE'}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm truncate max-w-[200px]">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => removeFile(index)}
                className="p-1 text-gray-500 hover:text-red-500 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;

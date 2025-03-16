
import React, { useState } from "react";
import { useWeb3 } from "@/lib/web3/Web3Provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload, CheckCircle } from "lucide-react";

interface ProofUploaderProps {
  opportunityId: string;
  onUploadComplete?: (cids: string[]) => void;
}

const ProofUploader: React.FC<ProofUploaderProps> = ({ 
  opportunityId, 
  onUploadComplete 
}) => {
  const { uploadProof, isConnected } = useWeb3();
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedCids, setUploadedCids] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    if (!files.length) {
      toast({
        title: "No Files Selected",
        description: "Please select at least one file to upload.",
        variant: "destructive",
      });
      return;
    }

    if (!isConnected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet to upload proof.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      const metadata = {
        opportunityId,
        timestamp: Date.now(),
        type: "project_proof"
      };
      
      const cids = await uploadProof(files, metadata);
      
      if (cids.length > 0) {
        setUploadedCids(cids);
        if (onUploadComplete) onUploadComplete(cids);
        
        toast({
          title: "Upload Successful",
          description: `Successfully uploaded ${cids.length} files to decentralized storage.`,
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your files. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <Input
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          id="proof-file-input"
        />
        <label
          htmlFor="proof-file-input"
          className="cursor-pointer flex flex-col items-center justify-center"
        >
          <Upload className="h-10 w-10 text-gray-400 mb-2" />
          <p className="text-gray-600 mb-1">Drag and drop files here or click to browse</p>
          <p className="text-sm text-gray-500">
            Images, videos or documents (max 50MB each)
          </p>
        </label>
      </div>

      {files.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Selected Files:</p>
          <ul className="text-sm space-y-1">
            {files.map((file, index) => (
              <li key={index} className="flex items-center">
                <span className="truncate">{file.name}</span>
                <span className="ml-2 text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {uploadedCids.length > 0 && (
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <p className="font-medium text-green-700">Files Uploaded Successfully</p>
          </div>
          <p className="text-sm text-green-600">
            Your files are now stored on decentralized storage and cannot be modified or deleted.
          </p>
        </div>
      )}

      <Button
        onClick={handleUpload}
        disabled={files.length === 0 || isUploading}
        className="w-full"
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading to Decentralized Storage...
          </>
        ) : (
          "Upload Proof"
        )}
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        By uploading, you confirm these files are authentic proof of your work and consent to 
        them being stored immutably on decentralized storage.
      </p>
    </div>
  );
};

export default ProofUploader;

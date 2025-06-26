import React from "react";

interface FileUploaderProps {
  label: string;
  accept: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  fileName?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  accept,
  placeholder,
  onChange,
  error,
  fileName,
}) => (
  <div className="mb-4">
    <p className="block mb-1">{label}</p>
    <label className="flex flex-col items-center justify-center px-4 py-6 bg-white border-2 border-dashed border-gray-400 rounded-md cursor-pointer hover:border-[#ffdc1c] transition">
      <span className="text-gray-500">{fileName || placeholder}</span>
      <input
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
      />
    </label>

    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default FileUploader;

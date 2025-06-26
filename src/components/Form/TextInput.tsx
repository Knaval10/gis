import React from "react";

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
  type = "text",
}) => (
  <div className="mb-4">
    <label className="block">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full border border-gray-300 rounded px-3 py-2 outline-[#ffdc1c]"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default TextInput;

import React from "react";
import RightArrow from "#assets/dynamic/RightArrow";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`ml-[10%] sm:ml-[20%] lg:ml-0 group flex items-center justify-center gap-2
        bg-[#FFDC1C] hover:bg-[#ffab00]
        border border-[#FFDC1C] hover:border-[#ffab00]
        text-[#0055FF] hover:text-[#05f]
        px-6 py-2 min-w-[140px] cursor-pointer
        transition-all duration-300 ease-in-out
        ${className}`}
    >
      {text}
      <RightArrow className="w-0 group-hover:w-3.5 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300 delay-150" />
    </button>
  );
};

export default Button;

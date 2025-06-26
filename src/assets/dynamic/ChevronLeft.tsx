import React from "react";

const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="7"
      height="10"
      viewBox="0 0 7 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 14L1 7.68571L6 1"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeft;

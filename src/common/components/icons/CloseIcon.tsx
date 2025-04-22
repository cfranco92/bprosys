import React from 'react';

interface CloseIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
      className={className}
    >
      <path d="M6 6L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M18 6L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  );
};

export default CloseIcon; 
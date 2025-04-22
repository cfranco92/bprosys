import React from 'react';

interface MenuIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const MenuIcon: React.FC<MenuIconProps> = ({
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
      <path d="M3 5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  );
};

export default MenuIcon; 
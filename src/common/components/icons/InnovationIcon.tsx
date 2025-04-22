import { SVGProps } from 'react';

export const InnovationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      width="32" 
      height="32" 
      fill="currentColor" 
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2L1 21h22L12 2zm0 4.215L18.944 19H5.056L12 6.215z" />
      <path d="M12 16a1 1 0 100-2 1 1 0 000 2zm0-6a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z" />
    </svg>
  );
};

export default InnovationIcon; 
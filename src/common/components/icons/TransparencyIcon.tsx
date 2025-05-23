import { SVGProps } from 'react';

export const TransparencyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      width="32" 
      height="32" 
      fill="currentColor" 
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  );
};

export default TransparencyIcon; 
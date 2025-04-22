export const APP_NAME = 'BProSys';
export const APP_DESCRIPTION = 'Catálogo de productos financieros';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.bprosys.com';

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const SECOND_IN_MS = 1000;
export const MINUTE_IN_MS = SECOND_IN_MS * 60;
export const HOUR_IN_MS = MINUTE_IN_MS * 60;
export const DAY_IN_MS = HOUR_IN_MS * 24; 
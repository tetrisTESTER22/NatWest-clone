import React from 'react';

const CheckIcon = ({ color = '#B084FF' }: { color?: string }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="5 13 10 18 19 6" />
    </svg>
  );
  
  export default CheckIcon;
  